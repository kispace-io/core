import { html } from "lit";
import { contributionRegistry, SYSTEM_LANGUAGE_BUNDLES } from "@kispace-io/core";
import { i18nLazy } from "@kispace-io/core";
import commandshellBundle from "./commandshell.json";
import "./k-command-shell";

contributionRegistry.registerContribution(SYSTEM_LANGUAGE_BUNDLES, commandshellBundle as any);

contributionRegistry.registerContribution("system.fastviews-bottomend", {
  name: "command-shell",
  label: "Command Shell",
  icon: "terminal",
  component: (id: string) => html`<k-command-shell id="${id}"></k-command-shell>`,
});
