import { CereusDB } from '@cereusdb/minimal';
import { runCereusWorker } from './cereusdb-worker-runtime';

runCereusWorker(async () => {
  return (await CereusDB.create()) as Awaited<ReturnType<typeof CereusDB.create>>;
});
