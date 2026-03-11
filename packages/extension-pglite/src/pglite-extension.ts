import { contributionRegistry } from '@eclipse-lyra/core';
import { pgliteSqlAdapterContribution } from './pglite-sqldatabase';

export default function activate() {
  contributionRegistry.registerContribution('system.sqladapters', pgliteSqlAdapterContribution);
}

