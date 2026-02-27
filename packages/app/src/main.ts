import 'pace-js/themes/blue/pace-theme-minimal.css';
import Pace from 'pace-js';
import { appLoaderService, applyAppHostConfig, commandRegistry, EDITOR_AREA_MAIN, TOOLBAR_MAIN_RIGHT, TOOLBAR_MAIN, type RenderDescriptor, TOOLBAR_MAIN_CENTER, TOOLBAR_BOTTOM, TOOLBAR_BOTTOM_CENTER, TOOLBAR_BOTTOM_END } from '@kispace-io/core';
import appPkg from '../package.json';

Pace.start();

applyAppHostConfig({
  packageInfo: {
    name: appPkg.name,
    version: appPkg.version,
    dependencies: appPkg.dependencies,
    devDependencies: appPkg.devDependencies,
  },
  marketplaceCatalogUrls: (appPkg as any).marketplace?.catalogUrls,
});

import '@kispace-io/extension-utils';
import '@kispace-io/extension-md-editor';
import '@kispace-io/extension-media-viewer';
import '@kispace-io/extension-memory-usage';
import '@kispace-io/extension-monaco-editor';
import '@kispace-io/extension-settings-tree';

import '@kispace-io/extension-github-service';
import '@kispace-io/extension-python-runtime';
import '@kispace-io/extension-linuxterminal';
import '@kispace-io/extension-webllm';
import '@kispace-io/extension-notebook';
import '@kispace-io/extension-command-palette';
import '@kispace-io/extension-command-shell';
import '@kispace-io/extension-webdav';
import '@kispace-io/extension-in-browser-ml';
import '@kispace-io/extension-ai-system';
import '@kispace-io/extension-rag-system';
import '@kispace-io/extension-howto-system';
import '@kispace-io/extension-webmcp';
import '@kispace-io/extension-duckdb';


import './default-app';
import './dashboard-app';