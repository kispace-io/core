import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.ai-system",
  name: t('EXT_AI_SYSTEM_NAME'),
  description: t('EXT_AI_SYSTEM_DESC'),
  loader: () => import("./ai-system-extension"),
  icon: "robot",
  
  dependencies: ["system.in-browser-ml"],
});
