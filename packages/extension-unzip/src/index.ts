import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.unzip",
  name: t('EXT_UNZIP_NAME'),
  description: t('EXT_UNZIP_DESC'),
  loader: () => import("./unzip-extension"),
  icon: "box-archive",
  
  
});
