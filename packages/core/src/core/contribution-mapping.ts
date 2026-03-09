import { rootContext } from "./di";
import type { Contribution } from "./contributionregistry";

export interface ContributionNameRemap {
    /**
     * Globally unique, namespaced contribution name
     * (e.g. "view.filebrowser", "toolbar.filebrowser.rename").
     */
    name: string;
    /**
     * Effective target slots for this contribution.
     * If empty, the original target is used.
     */
    targets: string[];
}

interface NameRemapState {
    appTargets: string[] | undefined;
    globalTargets: string[] | undefined;
}

/**
 * Registry responsible for resolving effective contribution targets.
 *
 * It supports:
 * - Global (framework-level) remaps.
 * - App-level remaps coming from AppDefinition.
 * - Multiple targets per contribution.
 *
 * Resolution precedence:
 *   app-level remap > global remap > original target
 */
class ContributionTargetMappingRegistry {
    private globalNameRemaps = new Map<string, string[]>();
    private appNameRemaps = new Map<string, string[]>();

    setGlobalNameRemap(name: string, targets: string[]): void {
        this.globalNameRemaps.set(name, this.normalizeTargets(targets));
    }

    /** Clears all remaps. For testing only. */
    resetForTesting(): void {
        this.globalNameRemaps.clear();
        this.appNameRemaps.clear();
    }

    applyAppNameRemaps(remaps: ContributionNameRemap[] | undefined | null): void {
        this.appNameRemaps.clear();
        if (!remaps) return;
        for (const remap of remaps) {
            this.appNameRemaps.set(remap.name, this.normalizeTargets(remap.targets));
        }
    }

    /**
     * Returns the effective target slots for a contribution given its original target.
     *
     * Semantics:
     * - When a remap exists with a non-empty targets array, those targets are used.
     * - When a remap exists with an empty targets array, the contribution is disabled (no targets).
     * - When no remap exists, the original target is used.
     */
    getEffectiveTargets(originalTarget: string, contribution: Contribution): string[] {
        const name = (contribution as any).name as string | undefined;
        if (!name) {
            return [originalTarget];
        }

        const appTargets = this.appNameRemaps.get(name);
        if (appTargets) {
            return appTargets.length > 0 ? appTargets : [];
        }

        const globalTargets = this.globalNameRemaps.get(name);
        if (globalTargets) {
            return globalTargets.length > 0 ? globalTargets : [];
        }

        return [originalTarget];
    }

    /**
     * Returns current mapping state for debugging and tooling.
     */
    listNameRemaps(): Record<string, NameRemapState> {
        const result: Record<string, NameRemapState> = {};
        const allNames = new Set<string>([
            ...this.globalNameRemaps.keys(),
            ...this.appNameRemaps.keys()
        ]);
        for (const name of allNames) {
            result[name] = {
                appTargets: this.appNameRemaps.get(name),
                globalTargets: this.globalNameRemaps.get(name)
            };
        }
        return result;
    }

    private normalizeTargets(targets: string[]): string[] {
        const seen = new Set<string>();
        const result: string[] = [];
        for (const t of targets) {
            if (!t || seen.has(t)) continue;
            seen.add(t);
            result.push(t);
        }
        return result;
    }
}

export const contributionTargetMappingRegistry = new ContributionTargetMappingRegistry();
rootContext.put("contributionTargetMappingRegistry", contributionTargetMappingRegistry);

/**
 * Public helper to override contribution targets programmatically.
 * This sets a global remap that applies across all apps.
 */
export function overrideContributionTargets(name: string, targets: string | string[]): void {
    const normalized = Array.isArray(targets) ? targets : [targets];
    contributionTargetMappingRegistry.setGlobalNameRemap(name, normalized);
}

/**
 * Apply config-driven name remaps from a simple object.
 * Intended for hosts that want to load JSON/YAML mapping files.
 */
export function applyConfigNameRemaps(config: Record<string, string | string[]>): void {
    for (const [name, targets] of Object.entries(config)) {
        const normalized = Array.isArray(targets) ? targets : [targets];
        contributionTargetMappingRegistry.setGlobalNameRemap(name, normalized);
    }
}

/**
 * Convenience helper for debugging: returns current remap state
 * for all known contribution names.
 */
export function listContributionNameRemaps(): Record<string, NameRemapState> {
    return contributionTargetMappingRegistry.listNameRemaps();
}

