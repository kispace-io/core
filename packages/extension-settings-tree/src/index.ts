import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.settings-tree",
  name: t('EXT_SETTINGS_TREE_NAME'),
  description: t('EXT_SETTINGS_TREE_DESC'),
  loader: () => import("./settings-tree-extension"),
  icon: "sitemap",
  
  
});
