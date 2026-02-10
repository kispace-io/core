import { extensionRegistry, i18nLazy, contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from "@kispace-io/core";
import bundle from "./i18n.json";

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, bundle as any);

const t = i18nLazy("extensions");

extensionRegistry.registerExtension({
  id: "system.utils",
  name: t("EXT_UTILS_NAME"),
  description: t("EXT_UTILS_DESC"),
  loader: () => import("./commands"),
  icon: "toolbox",
  dependencies: ["system.pythonruntime"]
});

