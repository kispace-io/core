import { customElement, property, state } from "lit/decorators.js";
import { LyraPart } from "@eclipse-lyra/core";
import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { EditorInput, EditorContentProvider, toastError, toastInfo, promptDialog, confirmDialog, activePartSignal, publish } from "@eclipse-lyra/core";
import { LyraMonacoWidget } from "@eclipse-lyra/extension-monaco-editor";
import { duckdbService, duckdbExtensionManagerService, type DuckDBDatabase } from "./api";

const MAX_TAB_LABEL = 28;
const DB_NAME_REGEX = /^[a-zA-Z0-9_.-]+$/;

function truncateLabel(sql: string): string {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  if (oneLine.length <= MAX_TAB_LABEL) return oneLine;
  return oneLine.slice(0, MAX_TAB_LABEL) + "…";
}

@customElement("lyra-duckdb-editor")
export class LyraDuckDBEditor extends LyraPart implements EditorContentProvider {
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
  private availableDatabases: string[] = [];

  @state()
  private selectedDbName: string | null = null;

  private widgetRef = createRef<LyraMonacoWidget>();
  private db: DuckDBDatabase | null = null;

  protected async doInitUI() {
    const file = this.input!.data;
    const textContents = await file.getContents();
    this.initialContent = textContents;
    this.initialUri = file.getName();
    this.watch(activePartSignal, () => {
      if (activePartSignal.get() === this) this.refreshDatabaseList();
    });
    await this.refreshDatabaseList();
    this.requestUpdate();
  }

  private async refreshDatabaseList(): Promise<void> {
    try {
      this.availableDatabases = await duckdbService.listDatabases();
    } catch {
      this.availableDatabases = [];
    }
    this.requestUpdate();
    this.updateToolbar();
  }

  private _onContentChange = () => {
    this.markDirty(true);
  };

  save(): void {
    const value = this.widgetRef.value?.getContent() ?? "";
    this.input?.data.saveContents(value);
    this.markDirty(false);
  }

  protected doClose() {
    this.widgetRef.value?.dispose();
    if (this.db) {
      void this.db.close();
      this.db = null;
    }
  }

  public getLanguage(): string | null {
    return "sql";
  }

  public isLanguage(lang: string): boolean {
    return lang.toLowerCase() === "sql";
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
      toastError(useSelectionOnly ? "No selection to run" : "No SQL to run");
      return;
    }
    if (this.running) return;

    this.running = true;
    const label = truncateLabel(sql);
    this.requestUpdate();
    this.updateToolbar();

    const timeoutMs = 60_000;
    const timeoutId = window.setTimeout(() => this.clearRunningState(), timeoutMs);

    try {
      const dbName = this.selectedDbName ?? undefined;
      if (!this.db || this.db.name !== (dbName ?? null)) {
        if (this.db) {
          void this.db.close();
          this.db = null;
        }
        this.db = await duckdbService.open(dbName);
      }
      const result = await this.db.runQuery(sql);
      publish('dataview/publish', {
        title: label,
        data: { columns: result.columns, rows: result.rows },
        source: 'duckdb',
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
    if (this.running) {
      this.running = false;
      this.requestUpdate();
      this.updateToolbar();
    }
  }

  private onDatabaseChange(e: Event) {
    const select = e.target as { value?: string };
    const value = select?.value ?? "";
    const next = value === "" ? null : value;
    if (this.selectedDbName === next) return;
    this.selectedDbName = next;
    if (this.db) {
      void this.db.close();
      this.db = null;
    }
    this.requestUpdate();
  }

  private async addNewDatabase(): Promise<void> {
    const raw = await promptDialog("New database name", "");
    if (raw == null) return;
    const name = raw.trim();
    if (!name) {
      toastError("Name cannot be empty");
      return;
    }
    if (!DB_NAME_REGEX.test(name)) {
      toastError("Name may only contain letters, numbers, and . _ -");
      return;
    }
    if (this.availableDatabases.includes(name)) {
      toastError(`Database "${name}" already exists`);
      return;
    }
    try {
      const newDb = await duckdbService.open(name);
      await newDb.close();
      this.selectedDbName = name;
      if (this.db) {
        void this.db.close();
        this.db = null;
      }
      await this.refreshDatabaseList();
      toastInfo(`Database "${name}" created`);
    } catch (err) {
      toastError(err instanceof Error ? err.message : String(err));
    }
  }

  private async deleteSelectedDatabase(): Promise<void> {
    const name = this.selectedDbName;
    const label = name === null ? "In-memory" : name;
    const ok = await confirmDialog(`Delete database "${label}"?`);
    if (!ok) return;
    if (name === null) {
      if (this.db) {
        void this.db.close();
        this.db = null;
      }
    } else {
      try {
        await duckdbService.delete(name);
        if (this.db?.name === name) this.db = null;
        this.selectedDbName = null;
        await this.refreshDatabaseList();
      } catch (err) {
        toastError(err instanceof Error ? err.message : String(err));
        return;
      }
    }
    this.requestUpdate();
    this.updateToolbar();
  }

  protected renderToolbar() {
    const dbValue = this.selectedDbName ?? "";
    return html`
      <wa-select
        class="db-select"
        size="small"
        value=${dbValue}
        title="Database (OPFS)"
        @change=${(e: Event) => this.onDatabaseChange(e)}
      >
        <wa-option value="">In-memory</wa-option>
        ${this.availableDatabases.map(
          (name) => html`<wa-option value=${name}>${name}</wa-option>`
        )}
      </wa-select>
      <wa-button
        size="small"
        appearance="plain"
        title="New database"
        @click=${() => this.addNewDatabase()}
      >
        <wa-icon name="plus" label="New"></wa-icon>
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        title=${this.selectedDbName === null ? "Clear in-memory database" : `Delete database "${this.selectedDbName}"`}
        @click=${() => this.deleteSelectedDatabase()}
      >
        <wa-icon name="trash" label="Delete"></wa-icon>
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        title="Manage DuckDB extensions"
        @click=${() =>
          duckdbExtensionManagerService.showExtensionManager({
            db: this.db,
            databaseLabel: this.selectedDbName === null ? "In-memory" : this.selectedDbName,
          })}
      >
        <wa-icon name="puzzle-piece" label="Extensions"></wa-icon>
        Extensions
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${() => this.runQuery(true)}
        title="Run selection only"
      >
        <wa-icon name="i-cursor" label="Run selection"></wa-icon>
        ${this.running ? "Running…" : "Run selection"}
      </wa-button>
      <wa-button
        size="small"
        appearance="plain"
        ?disabled=${this.running}
        @click=${() => this.runQuery(false)}
        title="Run all SQL"
      >
        <wa-icon name="play" label="Run"></wa-icon>
        ${this.running ? "Running…" : "Run all"}
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
          .language=${"sql"}
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
    .db-select {
      max-width: 10rem;
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
    "lyra-duckdb-editor": LyraDuckDBEditor;
  }
}
