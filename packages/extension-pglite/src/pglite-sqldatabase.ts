import type { PGlite } from '@electric-sql/pglite';
import type {
  SqlAdapterContribution,
  SqlConnectionInfo,
  SqlDatabase,
} from '@eclipse-lyra/extension-sqleditor';
import {
  appSettings,
  toastError,
  toastInfo,
  promptDialog,
} from '@eclipse-lyra/core';

async function createPglite(persistentId?: string): Promise<PGlite> {
  const { PGlite: PGliteCtor } = await import('@electric-sql/pglite');
  return persistentId ? new PGliteCtor(`idb://${persistentId}`) : new PGliteCtor();
}
const PGLITE_DB_SETTING_KEY = 'pglite.databases';
const DB_NAME_REGEX = /^[a-zA-Z0-9_.-]+$/;

async function getDatabaseNames(): Promise<string[]> {
  const stored = await appSettings.get(PGLITE_DB_SETTING_KEY);
  if (!Array.isArray(stored)) return [];
  return stored.filter((name): name is string => typeof name === 'string').sort();
}

async function saveDatabaseNames(names: string[]): Promise<void> {
  await appSettings.set(PGLITE_DB_SETTING_KEY, [...new Set(names)].sort());
}

class PgliteSqlDatabase implements SqlDatabase {
  readonly engineId = 'pglite';

  private db: PGlite | null = null;
  private currentId: string | null = null;

  get currentConnectionId(): string | null {
    return this.currentId;
  }

  async listConnections(): Promise<SqlConnectionInfo[]> {
    const names = await getDatabaseNames();
    return [
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
  }

  async selectConnection(id: string | null): Promise<void> {
    if (this.db && this.currentId === id) return;
    if (this.db && this.db.close) {
      await this.db.close();
    }
    this.db = null;
    this.db = await createPglite(id ?? undefined);
    this.currentId = id;
  }

  async runQuery(sql: string): Promise<{ columns: string[]; rows: unknown[][] }> {
    if (!this.db) {
      await this.selectConnection(null);
    }
    if (!this.db) {
      return { columns: [], rows: [] };
    }
    const result = await this.db.query(sql);
    const rows = Array.isArray(result.rows) ? (result.rows as Record<string, unknown>[]) : [];
    if (!rows.length) return { columns: [], rows: [] };
    const columns = Object.keys(rows[0]);
    const matrix = rows.map((row) => columns.map((c) => row[c]));
    return { columns, rows: matrix };
  }

  async close(): Promise<void> {
    if (!this.db) return;
    await this.db.close?.();
    this.db = null;
    this.currentId = null;
  }

  async createConnection(): Promise<SqlConnectionInfo | null> {
    const raw = await promptDialog('New PGlite database name', '');
    if (raw == null) return null;
    const name = raw.trim();
    if (!name) {
      toastError('Name cannot be empty');
      return null;
    }
    if (!DB_NAME_REGEX.test(name)) {
      toastError('Name may only contain letters, numbers, and . _ -');
      return null;
    }
    const existing = await getDatabaseNames();
    if (existing.includes(name)) {
      toastError(`Database "${name}" already exists`);
      return null;
    }
    await saveDatabaseNames([...existing, name]);
    toastInfo(`Database "${name}" created`);
    return {
      id: name,
      label: name,
      isDefault: false,
    };
  }

  async deleteConnection(id: string): Promise<void> {
    if (!id) return;
    const names = await getDatabaseNames();
    if (!names.includes(id)) return;
    const next = names.filter((n) => n !== id);
    await saveDatabaseNames(next);
    if (this.currentId === id) {
      await this.close();
    }
  }
}

export const pgliteSqlAdapterContribution: SqlAdapterContribution = {
  id: 'pglite',
  label: 'PostgreSQL (PGlite)',
  icon: 'database',
  loader: async () => new PgliteSqlDatabase(),
};

