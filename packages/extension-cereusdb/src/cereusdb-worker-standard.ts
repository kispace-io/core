import { CereusDB } from '@cereusdb/standard';
import { runCereusWorker } from './cereusdb-worker-runtime';
import standardWasmUrl from '@cereusdb/standard/wasm?url&no-inline';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl: standardWasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});
