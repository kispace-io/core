import {
  duckdbService,
  DuckDBDatabase,
} from './duckdb-service';
import {
  duckdbExtensionManagerService,
  DUCKDB_AVAILABLE_EXTENSIONS,
} from './duckdb-extension-manager';
import type {
  SqlAdapterContribution,
  SqlAdapterAction,
  SqlConnectionInfo,
  SqlDatabase,
  SqlDatabaseExtensionInfo,
} from '@eclipse-lyra/extension-sqleditor';

class DuckdbSqlDatabase implements SqlDatabase {
  readonly engineId = 'duckdb';

  private current: DuckDBDatabase | null = null;
  private currentId: string | null = null;

  get currentConnectionId(): string | null {
    return this.currentId;
  }

  async listConnections(): Promise<SqlConnectionInfo[]> {
    const names = await duckdbService.listDatabases();
    const result: SqlConnectionInfo[] = [
      {
        id: null,
        label: 'In-memory',
        isDefault: true,
      },
      ...names.map((name) => ({
        id: name,
        label: name,
      })),
    ];
    return result;
  }

  async selectConnection(id: string | null): Promise<void> {
    if (this.current && this.currentId === id) return;
    if (this.current) {
      await this.current.close();
      this.current = null;
    }
    const db =
      id === null
        ? await duckdbService.open()
        : await duckdbService.open(id);
    this.current = db;
    this.currentId = db.name ?? null;
  }

  async runQuery(sql: string): Promise<{ columns: string[]; rows: unknown[][] }> {
    if (!this.current) {
      await this.selectConnection(null);
    }
    if (!this.current) {
      return { columns: [], rows: [] };
    }
    const result = await this.current.runQuery(sql);
    return { columns: result.columns, rows: result.rows };
  }

  async createConnection(): Promise<SqlConnectionInfo | null> {
    // Creation flow is handled in the generic editor via prompts specific to DuckDB today.
    // For now, rely on editor-level name prompts and duckdbService.open(name) followed by close().
    return null;
  }

  async deleteConnection(id: string): Promise<void> {
    if (!id) return;
    if (this.current && this.current.name === id) {
      await this.current.close();
      this.current = null;
      this.currentId = null;
    }
    await duckdbService.delete(id);
  }

  extraActions: SqlAdapterAction[] = [
    {
      id: 'duckdb.extensions',
      label: 'DuckDB extensions',
      icon: 'puzzle-piece',
      run: async () => {
        const db = this.current;
        const label = this.currentId ?? 'In-memory';
        duckdbExtensionManagerService.showExtensionManager({
          db,
          databaseLabel: label,
        });
      },
    },
  ];

  async listDbExtensions(): Promise<SqlDatabaseExtensionInfo[]> {
    return DUCKDB_AVAILABLE_EXTENSIONS.map((ext) => ({
      id: ext.name,
      label: ext.name,
      description: ext.description,
    }));
  }

  async enableDbExtension(id: string): Promise<void> {
    if (!this.current) return;
    await this.current.enableExtension(id);
  }

  async close(): Promise<void> {
    if (!this.current) return;
    await this.current.close();
    this.current = null;
    this.currentId = null;
  }
}

export const duckdbSqlAdapterContribution: SqlAdapterContribution = {
  id: 'duckdb',
  label: 'DuckDB',
  icon: 'database',
  loader: async () => new DuckdbSqlDatabase(),
};

