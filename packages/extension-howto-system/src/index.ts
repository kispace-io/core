import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.howto",
  name: t('EXT_HOWTO_NAME'),
  description: t('EXT_HOWTO_DESC'),
  loader: () => import("./howto-extension"),
  icon: "list-check",
  
  
});
