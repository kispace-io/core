const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PACKAGES = path.join(ROOT, 'packages');

const EXTENSIONS = [
  { dir: 'extension-git', pkg: 'extension-git', id: 'system.git', entry: './git-extension', keyName: 'EXT_GIT_NAME', keyDesc: 'EXT_GIT_DESC', icon: 'code-branch', experimental: true },
  { dir: 'extension-github-service', pkg: 'extension-github-service', id: 'system.github-service', entry: './github-service-extension', keyName: 'EXT_GITHUB_SERVICE_NAME', keyDesc: 'EXT_GITHUB_SERVICE_DESC', icon: 'code-branch' },
  { dir: 'extension-python-runtime', pkg: 'extension-python-runtime', id: 'system.pythonruntime', entry: './python-runtime-extension', keyName: 'EXT_PYTHONRUNTIME_NAME', keyDesc: 'EXT_PYTHONRUNTIME_DESC', icon: 'k python' },
  { dir: 'extension-linuxterminal', pkg: 'extension-linuxterminal', id: 'system.linuxterminal', entry: './k-linuxterminal', keyName: 'EXT_LINUXTERMINAL_NAME', keyDesc: 'EXT_LINUXTERMINAL_DESC', icon: 'terminal', experimental: true },
  { dir: 'extension-webllm', pkg: 'extension-webllm', id: 'system.webllm', entry: './webllmservice', keyName: 'EXT_WEBLLM_NAME', keyDesc: 'EXT_WEBLLM_DESC', icon: 'robot' },
  { dir: 'extension-certs', pkg: 'extension-certs', id: 'system.p12splitter', entry: './p12-splitter', keyName: 'EXT_P12SPLITTER_NAME', keyDesc: 'EXT_P12SPLITTER_DESC', icon: 'certificate', pkgDeps: ['@kispace-io/extension-python-runtime'], extDeps: ['system.pythonruntime'] },
  { dir: 'extension-notebook', pkg: 'extension-notebook', id: 'system.notebook', entry: './notebook-extension', keyName: 'EXT_NOTEBOOK_NAME', keyDesc: 'EXT_NOTEBOOK_DESC', icon: 'k jupyter', pkgDeps: ['@kispace-io/extension-python-runtime'], extDeps: ['system.pythonruntime'] },
  { dir: 'extension-command-palette', pkg: 'extension-command-palette', id: 'system.commandpalette', entry: './command-palette-extension', keyName: 'EXT_COMMANDPALETTE_NAME', keyDesc: 'EXT_COMMANDPALETTE_DESC', icon: 'terminal' },
  { dir: 'extension-download', pkg: 'extension-download', id: 'system.download', entry: './download-extension', keyName: 'EXT_DOWNLOAD_NAME', keyDesc: 'EXT_DOWNLOAD_DESC', icon: 'download' },
  { dir: 'extension-unzip', pkg: 'extension-unzip', id: 'system.unzip', entry: './unzip-extension', keyName: 'EXT_UNZIP_NAME', keyDesc: 'EXT_UNZIP_DESC', icon: 'box-archive' },
  { dir: 'extension-md-editor', pkg: 'extension-md-editor', id: 'system.mdeditor', entry: './md-editor-extension', keyName: 'EXT_MDEDITOR_NAME', keyDesc: 'EXT_MDEDITOR_DESC', icon: 'book' },
  { dir: 'extension-media-viewer', pkg: 'extension-media-viewer', id: 'system.mediaviewer', entry: './media-viewer-extension', keyName: 'EXT_MEDIAVIEWER_NAME', keyDesc: 'EXT_MEDIAVIEWER_DESC', icon: 'image' },
  { dir: 'extension-monaco-editor', pkg: 'extension-monaco-editor', id: 'system.monaco', entry: './monaco-editor-extension', keyName: 'EXT_MONACO_NAME', keyDesc: 'EXT_MONACO_DESC', icon: 'file-pen', pkgDeps: ['@kispace-io/extension-python-runtime'], extDeps: ['system.pythonruntime'] },
  { dir: 'extension-memory-usage', pkg: 'extension-memory-usage', id: 'system.memoryusage', entry: './memory-usage-extension', keyName: 'EXT_MEMORYUSAGE_NAME', keyDesc: 'EXT_MEMORYUSAGE_DESC', icon: 'microchip' },
  { dir: 'extension-webdav', pkg: 'extension-webdav', id: 'system.webdav', entry: './webdav-extension', keyName: 'EXT_WEBDAV_NAME', keyDesc: 'EXT_WEBDAV_DESC', icon: 'cloud' },
  { dir: 'extension-settings-tree', pkg: 'extension-settings-tree', id: 'system.settings-tree', entry: './settings-tree-extension', keyName: 'EXT_SETTINGS_TREE_NAME', keyDesc: 'EXT_SETTINGS_TREE_DESC', icon: 'sitemap' },
  { dir: 'extension-in-browser-ml', pkg: 'extension-in-browser-ml', id: 'system.in-browser-ml', entry: './in-browser-ml-extension', keyName: 'EXT_IN_BROWSER_ML_NAME', keyDesc: 'EXT_IN_BROWSER_ML_DESC', icon: 'brain' },
  { dir: 'extension-ai-system', pkg: 'extension-ai-system', id: 'system.ai-system', entry: './ai-system-extension', keyName: 'EXT_AI_SYSTEM_NAME', keyDesc: 'EXT_AI_SYSTEM_DESC', icon: 'robot', pkgDeps: ['@kispace-io/extension-in-browser-ml'], extDeps: ['system.in-browser-ml'] },
  { dir: 'extension-rag-system', pkg: 'extension-rag-system', id: 'system.rag-system', entry: './rag-system-extension', keyName: 'EXT_RAG_SYSTEM_NAME', keyDesc: 'EXT_RAG_SYSTEM_DESC', icon: 'database', experimental: true, pkgDeps: ['@kispace-io/extension-ai-system', '@kispace-io/extension-in-browser-ml'], extDeps: ['system.ai-system', 'system.in-browser-ml'] },
  { dir: 'extension-howto-system', pkg: 'extension-howto-system', id: 'system.howto', entry: './howto-extension', keyName: 'EXT_HOWTO_NAME', keyDesc: 'EXT_HOWTO_DESC', icon: 'list-check' },
];

const scope = '@kispace-io';

for (const ext of EXTENSIONS) {
  const pkgName = `${scope}/${ext.pkg}`;
  const pkgDir = path.join(PACKAGES, ext.dir);
  const deps = { '@kispace-io/core': 'workspace:*', ...(ext.pkgDeps ? Object.fromEntries(ext.pkgDeps.map(d => [d, 'workspace:*'])) : {}) };
  const packageJson = {
    name: pkgName,
    version: '0.0.0',
    type: 'module',
    main: './src/index.ts',
    exports: { '.': { 'import': './src/index.ts', 'types': './src/index.ts' } },
    dependencies: deps,
    devDependencies: { typescript: '^5.9.3' },
  };
  fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify(packageJson, null, 2));

  const i18nJson = {
    namespace: 'extensions',
    en: { [ext.keyName]: ext.keyName, [ext.keyDesc]: ext.keyDesc },
    de: { [ext.keyName]: ext.keyName, [ext.keyDesc]: ext.keyDesc },
  };
  fs.writeFileSync(path.join(pkgDir, 'src', 'i18n.json'), JSON.stringify(i18nJson, null, 2));

  const indexTs = `import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "${ext.id}",
  name: t('${ext.keyName}'),
  description: t('${ext.keyDesc}'),
  loader: () => import("${ext.entry}"),
  icon: "${ext.icon}",
  ${ext.experimental ? 'experimental: true,' : ''}
  ${ext.extDeps?.length ? `dependencies: [${ext.extDeps.map(d => `"${d}"`).join(', ')}],` : ''}
});
`;
  fs.writeFileSync(path.join(pkgDir, 'src', 'index.ts'), indexTs);

  const tsconfig = {
    compilerOptions: { target: 'ES2022', module: 'ESNext', moduleResolution: 'bundler', strict: true, skipLibCheck: true },
    include: ['src/**/*'],
  };
  fs.writeFileSync(path.join(pkgDir, 'tsconfig.json'), JSON.stringify(tsconfig, null, 2));
}

console.log('Generated', EXTENSIONS.length, 'extension package.json, index.ts, tsconfig.json');