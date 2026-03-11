import { customElement, property, state } from 'lit/decorators.js';
import { LyraPart, type EditorInput, type EditorContentProvider, toastError, toastInfo, confirmDialog, publish, contributionRegistry, subscribe, unsubscribe, TOPIC_CONTRIBUTEIONS_CHANGED, taskService } from '@eclipse-lyra/core';
import type {
  SqlAdapterContribution,
  SqlConnectionInfo,
  SqlDatabase,
} from '@eclipse-lyra/extension-sqleditor';
import { css, html } from 'lit';
import { createRef, ref } from 'lit/directives/ref.js';
import { LyraMonacoWidget } from '@eclipse-lyra/extension-monaco-editor';

const MAX_TAB_LABEL = 28;

function truncateLabel(sql: string): string {
  const oneLine = sql.replace(/\s+/g, ' ').trim();
  if (oneLine.length <= MAX_TAB_LABEL) return oneLine;
  return `${oneLine.slice(0, MAX_TAB_LABEL)}…`;
}

@customElement('lyra-sql-editor')
export class LyraSqlEditor extends LyraPart implements EditorContentProvider {
  @property({ attribute: false })
  public input?: EditorInput;

  @property({ type: Boolean })
  public readOnly = false;

  @state()
  private initialContent: string | undefined = undefined;

  @state()
  private initialUri: string | undefined = undefined;

  @state()
  private running = false;

  @state()
  private availableAdapters: SqlAdapterContribution[] = [];

  @state()
  private selectedEngineId: string | null = null;

  @state()
  private availableConnections: SqlConnectionInfo[] = [];

  @state()
  private selectedConnectionId: string | null = null;

  private widgetRef = createRef<LyraMonacoWidget>();
  private databases = new Map<string, SqlDatabase>();
  private unsubscribeContributionsToken?: string;

  protected async doInitUI() {
    const file = this.input!.data;
    const textContents = await file.getContents();
    this.initialContent = textContents;
    this.initialUri = file.getName();
    this.unsubscribeContributionsToken = subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: { target?: string } | undefined) => {
      if (event?.target === 'system.sqladapters') {
        void this.refreshAdapters();
      }
    });

    await this.refreshAdapters();
    this.requestUpdate();
  }

  private async refreshAdapters(): Promise<void> {
    const contributions = contributionRegistry.getContributions<SqlAdapterContribution>('system.sqladapters');
    this.availableAdapters = contributions;
    if (!contributions.length) {
      this.selectedEngineId = null;
      this.availableConnections = [];
      this.selectedConnectionId = null;
      await this.updateComplete;
      this.updateToolbar();
      return;
    }
    if (!this.selectedEngineId) {
      const duckdbAdapter = contributions.find((c) => c.id === 'duckdb');
      this.selectedEngineId = (duckdbAdapter ?? contributions[0]).id;
    }
    this.requestUpdate();
    await this.refreshConnections();
    await this.updateComplete;
    this.updateToolbar();
  }

  private async getOrLoadDatabase(engineId: string): Promise<SqlDatabase | null> {
    const cached = this.databases.get(engineId);
    if (cached) return cached;
    const adapter = this.availableAdapters.find((c) => c.id === engineId);
    if (!adapter) return null;
    try {
      const label = adapter.label || adapter.id;
      const database = await taskService.runAsync(`Opening ${label} database`, async (progress) => {
        progress.message = `Connecting to ${label}…`;
        return adapter.loader();
      });
      this.databases.set(engineId, database);
      return database;
    } catch (err) {
      toastError(err instanceof Error ? err.message : String(err));
      return null;
    }
  }

  private async refreshConnections(): Promise<void> {
    const engineId = this.selectedEngineId;
    if (!engineId) {
      this.availableConnections = [];
      this.selectedConnectionId = null;
      await this.updateComplete;
      this.updateToolbar();
      return;
    }
    const db = await this.getOrLoadDatabase(engineId);
    if (!db) {
      this.availableConnections = [];
      this.selectedConnectionId = null;
      await this.updateComplete;
      this.updateToolbar();
      return;
    }
    const infos = await db.listConnections();
    this.availableConnections = infos;
    const currentId = db.currentConnectionId;
    if (currentId !== null) {
      this.selectedConnectionId = currentId;
      await this.updateComplete;
      this.updateToolbar();
      return;
    }
    const preferred = infos.find((info: SqlConnectionInfo) => info.isDefault) ?? infos[0];
    this.selectedConnectionId = preferred ? preferred.id : null;
    if (preferred) {
      await db.selectConnection(preferred.id ?? null);
    }
    await this.updateComplete;
    this.updateToolbar();
  }

  private async onEngineChange(e: Event): Promise<void> {
    const select = e.target as { value?: string };
    const value = select?.value ?? '';
    if (this.selectedEngineId === value) return;
    this.selectedEngineId = value || null;
    await this.refreshConnections();
    this.requestUpdate();
    this.updateToolbar();
  }

  private async onConnectionChange(e: Event): Promise<void> {
    const select = e.target as { value?: string };
    const value = select?.value ?? '';
    const next = value === '' ? null : value;
    if (this.selectedConnectionId === next) return;
    this.selectedConnectionId = next;
    const engineId = this.selectedEngineId;
    if (!engineId) return;
    const db = await this.getOrLoadDatabase(engineId);
    if (!db) return;
    await db.selectConnection(next);
    this.requestUpdate();
    this.updateToolbar();
  }

  private _onContentChange = () => {
    this.markDirty(true);
  };

  save(): void {
    const value = this.widgetRef.value?.getContent() ?? '';
    this.input?.data.saveContents(value);
    this.markDirty(false);
  }

  protected async doClose() {
    if (this.unsubscribeContributionsToken) {
      unsubscribe(this.unsubscribeContributionsToken);
      this.unsubscribeContributionsToken = undefined;
    }
    this.widgetRef.value?.dispose();
    for (const db of this.databases.values()) {
      await db.close();
    }
    this.databases.clear();
  }

  public getLanguage(): string | null {
    return 'sql';
  }

  public isLanguage(lang: string): boolean {
    return lang.toLowerCase() === 'sql';
  }

  public getContent(): string | null {
    return this.widgetRef.value?.getContent() ?? null;
  }

  public getSelection(): string | null {
    return this.widgetRef.value?.getSelection() ?? null;
  }

  public getSnippet(lines: number = 5): { snippet: string; cursorLine: number } | null {
    return this.widgetRef.value?.getSnippet(lines) ?? null;
  }

  public getFilePath(): string | null {
    return this.input?.data?.getWorkspacePath() ?? null;
  }

  private async runQuery(useSelectionOnly = false): Promise<void> {
    const sql = useSelectionOnly
      ? this.getSelection()?.trim()
      : (this.getSelection()?.trim() || this.getContent()?.trim());
    if (!sql) {
      toastError(useSelectionOnly ? 'No selection to run' : 'No SQL to run');
      return;
    }
    if (this.running) return;

    const engineId = this.selectedEngineId;
    if (!engineId) {
      toastError('No SQL engine available');
      return;
    }

    const db = await this.getOrLoadDatabase(engineId);
    if (!db) {
      toastError('Could not initialize SQL engine');
      return;
    }

    if (!this.selectedConnectionId && this.availableConnections.length) {
      const preferred = this.availableConnections.find(
        (info: SqlConnectionInfo) => info.isDefault,
      ) ?? this.availableConnections[0];
      this.selectedConnectionId = preferred.id;
      await db.selectConnection(preferred.id ?? null);
    }

    this.running = true;
    const label = truncateLabel(sql);
    this.requestUpdate();
    this.updateToolbar();

    const timeoutMs = 60_000;
    const timeoutId = window.setTimeout(() => this.clearRunningState(), timeoutMs);

    try {
      const result = await db.runQuery(sql);
      const adapter = this.availableAdapters.find((c) => c.id === engineId);
      publish('dataview/publish', {
        title: label,
        data: { columns: result.columns, rows: result.rows },
        source: adapter?.label ?? engineId,
      });
    } catch (err) {
      toastError(err instanceof Error ? err.message : String(err));
    } finally {
      window.clearTimeout(timeoutId);
      this.running = false;
      this.requestUpdate();
      this.updateToolbar();
    }
  }

  private clearRunningState(): void {
    if (!this.running) return;
    this.running = false;
    this.requestUpdate();
    this.updateToolbar();
  }

  private async createConnection(): Promise<void> {
    const engineId = this.selectedEngineId;
    if (!engineId) return;
    const db = await this.getOrLoadDatabase(engineId);
    if (!db || !db.createConnection) return;
    const info = await db.createConnection();
    if (!info) return;
    await this.refreshConnections();
    this.selectedConnectionId = info.id;
    await db.selectConnection(info.id ?? null);
    toastInfo(`Connection "${info.label}" created`);
    this.requestUpdate();
    this.updateToolbar();
  }

  private async deleteConnection(): Promise<void> {
    const engineId = this.selectedEngineId;
    if (!engineId) return;
    const db = await this.getOrLoadDatabase(engineId);
    if (!db || !db.deleteConnection) return;
    const id = this.selectedConnectionId;
    const connectionLabel =
      this.availableConnections.find((info) => info.id === id)?.label ??
      (id === null ? 'In-memory' : id ?? 'Current connection');
    const ok = await confirmDialog(`Delete connection "${connectionLabel}"?`);
    if (!ok) return;
    if (id !== null) {
      await db.deleteConnection(id);
    } else {
      await db.selectConnection(null);
    }
    await this.refreshConnections();
    this.requestUpdate();
    this.updateToolbar();
  }

  protected renderToolbar() {
    const engineValue = this.selectedEngineId ?? '';
    const connectionValue = this.selectedConnectionId ?? '';
    const adapters = this.availableAdapters;
    const hasEngines = adapters.length > 0;
    const hasConnections = this.availableConnections.length > 0;

    return html`
      <wa-select
        class="engine-select"
        size="small"
        .value=${engineValue}
        title="SQL engine"
        @change=${(e: Event) => void this.onEngineChange(e)}
      >
        ${adapters.map(
          (adapter) =>
            html`<wa-option value=${adapter.id}>${adapter.label}</wa-option>`,
        )}
      </wa-select>
      <wa-select
        class="connection-select"
        size="small"
        .value=${connectionValue}
        title="Connection"
        ?disabled=${!hasEngines || !hasConnections}
        @change=${(e: Event) => void this.onConnectionChange(e)}
      >
        ${this.availableConnections.map(
          (info) =>
            html`<wa-option value=${info.id ?? ''}>${info.label}</wa-option>`,
        )}
      </wa-select>
      <wa-button
        size="small"
        appearance="plain"
        title="New connection"
        @click=${() => void this.createConnection()}
      >
        <wa-icon name="plus" label="New"></wa-icon>
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        title="Delete connection"
        @click=${() => void this.deleteConnection()}
      >
        <wa-icon name="trash" label="Delete"></wa-icon>
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${() => void this.runQuery(true)}
        title="Run selection only"
      >
        <wa-icon name="i-cursor" label="Run selection"></wa-icon>
        ${this.running ? 'Running…' : 'Run selection'}
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${() => void this.runQuery(false)}
        title="Run all SQL"
      >
        <wa-icon name="play" label="Run"></wa-icon>
        ${this.running ? 'Running…' : 'Run all'}
      </wa-button>
    `;
  }

  render() {
    if (this.initialContent === undefined) {
      return html`<div class="editor-placeholder"></div>`;
    }

    return html`
      <div class="editor-area">
        <lyra-monaco-widget
          .value=${this.initialContent}
          .uri=${this.initialUri}
          .language=${'sql'}
          .readOnly=${this.readOnly}
          @content-change=${this._onContentChange}
          ${ref(this.widgetRef)}
        ></lyra-monaco-widget>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .engine-select {
      max-width: 10rem;
    }
    .connection-select {
      max-width: 12rem;
    }
    .editor-area {
      flex: 1;
      min-height: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .editor-area lyra-monaco-widget,
    .editor-area monaco-widget {
      flex: 1;
      min-height: 0;
    }
    .editor-placeholder {
      flex: 1;
      min-height: 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'lyra-sql-editor': LyraSqlEditor;
  }
}

