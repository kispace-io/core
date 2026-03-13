import { rootContext, contributionRegistry } from '@eclipse-lyra/core';
import { duckdbService } from './duckdb-service';
import { duckdbSqlAdapterContribution } from './duckdb-sqldatabase';

export default function () {
  rootContext.put('duckdbService', duckdbService);
  contributionRegistry.registerContribution(
    'system.sqladapters',
    duckdbSqlAdapterContribution,
  );
}
