# extension-duckdb

- **Bundle selection**: DuckDB-WASM is instantiated at runtime using `getJsDelivrBundles()` and `selectBundle()` from `@duckdb/duckdb-wasm`. The worker is created from the selected bundle’s `mainWorker` URL via `URL.createObjectURL(new Blob([...]))`; the URL is revoked after the worker is created.
- **Worker lifecycle**: A single `AsyncDuckDB` instance and one connection are kept in `DuckDBService`. `close()` disconnects the connection and calls `db.terminate()` on the bindings. The extension does not auto-close on unload; call `duckdbService.close()` if needed.
- **Query results**: `conn.query()` returns an Apache Arrow `Table`; rows are converted with `table.toArray()` and returned as `{ rows, columns }` from `runQuery()`.
- **Monaco integration**: There is no custom SQL editor. The extension registers a **Monaco language handler** (contribution target `monaco-editor.languageHandlers`) for language `sql` with `onRun`. When a `.sql` file is opened in the default Monaco editor, a Run button appears and executes the editor content via `duckdbService.runQuery()`; result count or errors are shown via toasts.
