import { registerAll } from "../core/commandregistry";
import { SYSTEM_VIEWS } from "../core/constants";
import type { TabContribution } from "../core/contributionregistry";
import { contributionRegistry } from "../core/contributionregistry";
import { editorRegistry } from "../core/editorregistry";

registerAll({
    command: {
        id: "open_view_as_editor",
        name: "Open view as editor",
        description: "Opens a dashboard view in the editor area",
        parameters: [
            { name: "name", description: "View contribution name", required: true },
            { name: "sourceContributionSlot", description: "source contribution slot (default: SYSTEM_VIEWS)", required: false }
        ]
    },
    handler: {
        execute: async ({ params }: { params?: { name?: string, sourceContributionSlot?: string } }) => {
            const name = params?.name;
            if (!name) return;
            const slot = params?.sourceContributionSlot ?? SYSTEM_VIEWS
            const contributions = contributionRegistry.getContributions(slot) as TabContribution[];
            const contribution = contributions.find(c => c.name === name);
            if (!contribution?.component) return;
            await editorRegistry.openTab(contribution as TabContribution);
        }
    }
});
