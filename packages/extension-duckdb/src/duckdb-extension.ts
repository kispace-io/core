import { rootContext, commandRegistry, RUN_ACTIVE_SCRIPT_ID, toastInfo, toastError } from '@kispace-io/core';
import { duckdbService } from './duckdb-service';

export default function () {
  rootContext.put('duckdbService', duckdbService);

  commandRegistry.registerHandler(RUN_ACTIVE_SCRIPT_ID, {
    ranking: 0,
    canExecute: (ctx) => !!(ctx.activeEditor as { isLanguage?(lang: string): boolean })?.isLanguage?.('sql'),
    execute: async (ctx) => {
      const content = ctx.activeEditor?.getContent?.()?.trim();
      if (!content) {
        toastError('No SQL to run');
        return;
      }
      try {
        const db = await duckdbService.open();
        const result = await db.runQuery(content);
        const n = result.rows.length;
        toastInfo(n === 0 ? 'Query returned no rows' : `Query returned ${n} row${n === 1 ? '' : 's'}`);
      } catch (err) {
        toastError(err instanceof Error ? err.message : String(err));
      }
    },
  });
}
