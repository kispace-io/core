import Papa from 'papaparse';

/** Parses CSV-like (comma-, tab-, or other delimited) text; delimiter is auto-detected. */
export function parseCsv(text: string): { columns: string[]; rows: unknown[][] } {
  const result = Papa.parse<Record<string, unknown>>(text, {
    header: true,
    skipEmptyLines: true,
  });
  const columns = result.meta.fields ?? [];
  const rows = result.data.map((row: Record<string, unknown>) =>
    columns.map((col: string) => row[col])
  );
  return { columns, rows };
}
