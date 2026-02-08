import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.monaco",
  name: t('EXT_MONACO_NAME'),
  description: t('EXT_MONACO_DESC'),
  loader: () => import("./monaco-editor-extension"),
  icon: "file-pen",
  
  dependencies: ["system.pythonruntime"],
});
