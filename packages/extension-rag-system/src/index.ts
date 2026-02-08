import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from '@kispace-io/core';
import bundle from './i18n.json';

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy('extensions');

extensionRegistry.registerExtension({
  id: "system.rag-system",
  name: t('EXT_RAG_SYSTEM_NAME'),
  description: t('EXT_RAG_SYSTEM_DESC'),
  loader: () => import("./rag-system-extension"),
  icon: "database",
  experimental: true,
  dependencies: ["system.ai-system", "system.in-browser-ml"],
});
