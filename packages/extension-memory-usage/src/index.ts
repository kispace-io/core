import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.memoryusage",
  name: t('EXT_MEMORYUSAGE_NAME'),
  description: t('EXT_MEMORYUSAGE_DESC'),
  loader: () => import("./memory-usage-extension"),
  icon: "microchip",
  
  
});
