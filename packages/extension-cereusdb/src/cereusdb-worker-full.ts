import { CereusDB } from '@cereusdb/full';
import { runCereusWorker } from './cereusdb-worker-runtime';
import fullWasmUrl from '@cereusdb/full/wasm?url&no-inline';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl: fullWasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});
