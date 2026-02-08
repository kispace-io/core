import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.github-service",
  name: t('EXT_GITHUB_SERVICE_NAME'),
  description: t('EXT_GITHUB_SERVICE_DESC'),
  loader: () => import("./github-service-extension"),
  icon: "code-branch",
  
  
});
