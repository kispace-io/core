import { createLogger } from '@kispace-io/core';
import * as duckdb from '@duckdb/duckdb-wasm';
import duckdb_wasm_mvp from '@duckdb/duckdb-wasm/dist/duckdb-mvp.wasm?url';
import mvp_worker from '@duckdb/duckdb-wasm/dist/duckdb-browser-mvp.worker.js?url';
import duckdb_wasm_eh from '@duckdb/duckdb-wasm/dist/duckdb-eh.wasm?url';
import eh_worker from '@duckdb/duckdb-wasm/dist/duckdb-browser-eh.worker.js?url';

const logger = createLogger('DuckDBService');

const MANUAL_BUNDLES: duckdb.DuckDBBundles = {
  mvp: { mainModule: duckdb_wasm_mvp, mainWorker: mvp_worker },
  eh: { mainModule: duckdb_wasm_eh, mainWorker: eh_worker },
};

/** Plain JS result: columns in order, rows as array of value arrays. */
export interface DuckDBQueryResult {
  columns: string[];
  rows: unknown[][];
}

type AsyncDuckDB = duckdb.AsyncDuckDB;
type AsyncDuckDBConnection = Awaited<ReturnType<AsyncDuckDB['connect']>>;

export class DuckDBService {
  private static instance: DuckDBService;
  private db: AsyncDuckDB | null = null;
  private conn: AsyncDuckDBConnection | null = null;
  private initPromise: Promise<void> | null = null;

  private constructor() {}

  static getInstance(): DuckDBService {
    if (!DuckDBService.instance) {
      DuckDBService.instance = new DuckDBService();
    }
    return DuckDBService.instance;
  }

  private async ensureInit(): Promise<void> {
    if (this.conn) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = (async () => {
      try {
        const bundle = await duckdb.selectBundle(MANUAL_BUNDLES);
        const worker = new Worker(bundle.mainWorker!);
        const log = new duckdb.ConsoleLogger();
        this.db = new duckdb.AsyncDuckDB(log, worker);
        await this.db.instantiate(bundle.mainModule, bundle.pthreadWorker);
        this.conn = await this.db.connect();
        logger.info('DuckDB-WASM initialized');
      } catch (err) {
        this.initPromise = null;
        const msg = err instanceof Error ? err.message : String(err);
        logger.error(`DuckDB init failed: ${msg}`);
        throw new Error(`DuckDB initialization failed: ${msg}`);
      }
    })();

    await this.initPromise;
  }

  private static readonly EXTENSION_NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9_]*$/;

  /**
   * Installs and loads a DuckDB extension (e.g. 'spatial' for spatial operations).
   * Safe to call multiple times; already installed/loaded extensions are a no-op.
   */
  async enableExtension(extensionName: string): Promise<void> {
    if (!DuckDBService.EXTENSION_NAME_REGEX.test(extensionName)) {
      throw new Error(`Invalid extension name: ${extensionName}`);
    }
    await this.ensureInit();
    if (!this.conn) throw new Error('DuckDB connection not available');

    const installSql = `INSTALL ${extensionName}`;
    const loadSql = `LOAD ${extensionName}`;
    try {
      await this.conn.query(installSql);
      await this.conn.query(loadSql);
      logger.info(`DuckDB extension enabled: ${extensionName}`);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      logger.error(`Failed to enable extension ${extensionName}: ${msg}`);
      throw new Error(`Failed to enable extension ${extensionName}: ${msg}`);
    }
  }

  async runQuery(sql: string): Promise<DuckDBQueryResult> {
    await this.ensureInit();
    if (!this.conn) throw new Error('DuckDB connection not available');

    const trimmed = sql.trim();
    if (!trimmed) return { rows: [], columns: [] };

    try {
      const table = await this.conn.query(trimmed);
      const { columns, rows } = this.tableToPlainArrays(table);
      return { columns, rows };
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      logger.error(`Query failed: ${msg}`);
      throw new Error(`Query failed: ${msg}`);
    }
  }

  private toPlainValue(v: unknown): unknown {
    if (v === null || v === undefined) return v;
    if (typeof v === 'bigint') return Number(v);
    if (v instanceof Date) return v.toISOString();
    if (typeof v === 'object' && v !== null && typeof (v as { toJSON: unknown }).toJSON === 'function') {
      return (v as { toJSON: () => unknown }).toJSON();
    }
    return v;
  }

  private tableToPlainArrays(table: { toArray?: () => unknown[] }): { columns: string[]; rows: unknown[][] } {
    const raw = table.toArray?.();
    const rowObjects = Array.isArray(raw) ? (raw as Record<string, unknown>[]) : [];
    if (rowObjects.length === 0) return { columns: [], rows: [] };
    const columns = Object.keys(rowObjects[0]);
    const rows = rowObjects.map((obj) => columns.map((col) => this.toPlainValue(obj[col])));
    return { columns, rows };
  }

  async close(): Promise<void> {
    if (this.conn) {
      try {
        await this.conn.close();
      } catch (e) {
        logger.warn('Error closing DuckDB connection: ' + (e instanceof Error ? e.message : String(e)));
      }
      this.conn = null;
    }
    if (this.db) {
      try {
        this.db.terminate();
      } catch (e) {
        logger.warn('Error terminating DuckDB: ' + (e instanceof Error ? e.message : String(e)));
      }
      this.db = null;
    }
    this.initPromise = null;
    logger.info('DuckDB closed');
  }
}

export const duckdbService = DuckDBService.getInstance();
