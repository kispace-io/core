import { extensionRegistry } from '@eclipse-lyra/core';
import pkg from '../package.json';

extensionRegistry.registerExtension({
  id: pkg.name,
  name: 'PGlite',
  description: 'In-browser PostgreSQL via PGlite',
  loader: () => import('./pglite-extension'),
  icon: 'database',
});

