// Framework Entry Point
//
// Main entry point: initializes services, registers components. For API usage, import from './api/index.ts'.
//
// Usage:
//   import './core/index.ts'  // Bootstrap framework
//   import { appLoaderService, commandRegistry } from './core/api/index.ts'  // Use API

import '../i18n';

import './keybindings';
import '../dialogs';
import '../parts/index';
import '../components';
import '../widgets/index';
import '../extensions';
import '../contributions';
import '../commands';

import { packageInfoService } from './packageinfoservice';
import appspacePackageJson from '../../package.json';

packageInfoService.addPackage({
    name: appspacePackageJson.name,
    version: appspacePackageJson.version,
    dependencies: appspacePackageJson.dependencies,
    devDependencies: appspacePackageJson.devDependencies
});

export { esmShService } from './esmsh-service';
export type { EsmShSource, EsmShOptions } from './esmsh-service';
