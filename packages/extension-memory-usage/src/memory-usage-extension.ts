import {contributionRegistry, HTMLContribution} from "@kispace-io/core";
import {TOOLBAR_BOTTOM} from "@kispace-io/core";
import "./k-memory-usage";

contributionRegistry.registerContribution(TOOLBAR_BOTTOM, {
    target: TOOLBAR_BOTTOM,
    label: "Memory",
    html: `<k-memory-usage></k-memory-usage>`
} as HTMLContribution)

