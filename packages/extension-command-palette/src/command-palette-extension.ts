import { contributionRegistry, registerAll, TOOLBAR_MAIN_CENTER, publish } from "@eclipse-lyra/core";
import { t, TOPIC_OPEN_COMMAND_PALETTE } from "./lyra-command-palette";
import { html } from "@eclipse-lyra/core/externals/lit";

registerAll({
  command: {
    id: "commandpalette.open",
    name: t.OPEN_COMMAND_PALETTE,
    description: t.OPEN_COMMAND_PALETTE_DESC,
    icon: "terminal",
    keyBinding: "CTRL+SHIFT+P",
  },
  handler: {
    execute: () => {
      publish(TOPIC_OPEN_COMMAND_PALETTE, null);
      return null;
    },
  },
});

contributionRegistry.registerContribution(TOOLBAR_MAIN_CENTER, {
  label: "Command Palette",
  icon: "terminal",
  component: () => html`<lyra-command-palette></lyra-command-palette>`,
});

