export const TARGET_SQL_ADAPTERS = 'system.sqladapters';

export interface SqlConnectionInfo {
  id: string | null;
  label: string;
  isDefault?: boolean;
}

export interface SqlDatabaseExtensionInfo {
  id: string;
  label: string;
  description?: string;
  installed?: boolean;
}

export interface SqlAdapterAction {
  id: string;
  label: string;
  icon?: string;
  run(): Promise<void>;
}

export interface SqlDatabase {
  readonly engineId: string;
  readonly currentConnectionId: string | null;

  listConnections(): Promise<SqlConnectionInfo[]>;
  selectConnection(id: string | null): Promise<void>;
  runQuery(sql: string): Promise<{ columns: string[]; rows: unknown[][] }>;

  createConnection?(): Promise<SqlConnectionInfo | null>;
  deleteConnection?(id: string): Promise<void>;

  extraActions?: SqlAdapterAction[];

  listDbExtensions?(): Promise<SqlDatabaseExtensionInfo[]>;
  enableDbExtension?(id: string): Promise<void>;
  disableDbExtension?(id: string): Promise<void>;

  close(): Promise<void> | void;
}

export interface SqlAdapterContribution {
  id: string;
  label: string;
  icon?: string;
  loader: () => Promise<SqlDatabase>;
}

