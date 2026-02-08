import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.p12splitter",
  name: t('EXT_P12SPLITTER_NAME'),
  description: t('EXT_P12SPLITTER_DESC'),
  loader: () => import("./p12-splitter"),
  icon: "certificate",
  
  dependencies: ["system.pythonruntime"],
});
