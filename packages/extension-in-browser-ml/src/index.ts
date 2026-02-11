import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.in-browser-ml",
  name: t('EXT_IN_BROWSER_ML_NAME'),
  description: t('EXT_IN_BROWSER_ML_DESC'),
  loader: () => import("./in-browser-ml-extension"),
  icon: "brain",
});
