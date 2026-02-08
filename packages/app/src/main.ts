import 'pace-js/themes/blue/pace-theme-minimal.css';
import Pace from 'pace-js';
import { appLoaderService, applyAppHostConfig, type RenderDescriptor } from '@kispace-io/core';
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

import '@kispace-io/extension-github-service';
import '@kispace-io/extension-python-runtime';
import '@kispace-io/extension-linuxterminal';
import '@kispace-io/extension-webllm';
import '@kispace-io/extension-certs';
import '@kispace-io/extension-notebook';
import '@kispace-io/extension-command-palette';
import '@kispace-io/extension-download';
import '@kispace-io/extension-unzip';
import '@kispace-io/extension-md-editor';
import '@kispace-io/extension-media-viewer';
import '@kispace-io/extension-monaco-editor';
import '@kispace-io/extension-memory-usage';
import '@kispace-io/extension-webdav';
import '@kispace-io/extension-settings-tree';
import '@kispace-io/extension-in-browser-ml';
import '@kispace-io/extension-ai-system';
import '@kispace-io/extension-rag-system';
import '@kispace-io/extension-howto-system';

appLoaderService.registerApp(
  {
    id: 'dev-standard-app',
    name: 'Default App',
    version: '0.0.0',
    description: 'Default app!space application',
    extensions: [
      'system.commandpalette',
      'system.mdeditor',
      'system.monaco',
      'system.mediaviewer',
      'system.settings-tree',
      'system.memoryusage',
      'system.ai-system',
    ],
  },
  { autoStart: true }
);

appLoaderService.registerApp({
  id: 'dev-standard-app-2',
  name: 'Default App 2',
  version: '0.0.0',
  description: 'Default app!space application 2',
  extensions: [
    'system.mdeditor',
    'system.monaco',
    'system.mediaviewer',
    'system.settings-tree',
    'system.memoryusage',
    'system.ai-system',
  ],
  render: { tag: 'k-standard-app', attributes: { 'show-bottom-panel': 'true' } } satisfies RenderDescriptor,
});
