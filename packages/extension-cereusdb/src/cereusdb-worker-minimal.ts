import { CereusDB } from '@cereusdb/minimal';
import { runCereusWorker } from './cereusdb-worker-runtime';
import minimalWasmUrl from '@cereusdb/minimal/wasm?url&no-inline';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl: minimalWasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});
