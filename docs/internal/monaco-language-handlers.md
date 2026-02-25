# Monaco editor: domain-specific language handlers

Extensions can add domain-specific behavior to the default Monaco editor (e.g. Run for SQL, Python, etc.) without replacing the editor.

## Contribution target

- **Target**: `monaco-editor.languageHandlers` (constant `CID_MONACO_LANGUAGE_HANDLERS` from `@kispace-io/extension-monaco-editor`).

## Contribution shape

Register with `contributionRegistry.registerContribution(CID_MONACO_LANGUAGE_HANDLERS, { ... })`:

- **label** (string): Identifier for the handler (e.g. "DuckDB SQL").
- **language** (string | string[]): Monaco language id(s) this handler applies to (e.g. `'sql'`, `['sql', 'mysql']`). Matching is done from the file extension when the editor opens (e.g. `.sql` → `sql`).
- **priority** (number, optional): Higher priority handlers are ordered first. Default 0.
- **toolbar** (() => TemplateResult, optional): Extra toolbar content (Lit template) for this language.
- **onRun** ((context: MonacoLanguageHandlerContext) => Promise<void>, optional): Called when the user runs from the toolbar. Context provides `getContent(): string | null` for the current editor text.

If `onRun` is present, the Monaco editor shows a Run button for that language; clicking it calls `onRun({ getContent })`. Multiple handlers can match the same language; each with `onRun` gets a Run button (currently the first handler’s Run is shown; custom toolbar items come from all handlers).

## Example

See `packages/extension-duckdb/src/duckdb-extension.ts`: it registers a handler for `language: 'sql'` with `onRun` that calls `duckdbService.runQuery(getContent())` and shows a toast with the result count or error.
