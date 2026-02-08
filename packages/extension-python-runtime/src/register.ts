import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.pythonruntime",
  name: t('EXT_PYTHONRUNTIME_NAME'),
  description: t('EXT_PYTHONRUNTIME_DESC'),
  loader: () => import("./python-runtime-extension"),
  icon: "k python",
  
  
});
