import { CereusDB } from '@cereusdb/global';
import { runCereusWorker } from './cereusdb-worker-runtime';
import globalWasmUrl from '@cereusdb/global/wasm?url&no-inline';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl: globalWasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});
