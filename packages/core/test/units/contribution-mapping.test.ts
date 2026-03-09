import { describe, it, expect, beforeEach, vi } from 'vitest';
import type { Contribution } from '../../src/core/contributionregistry';

vi.mock('../../src/core/di', () => ({ rootContext: { put: vi.fn() } }));

import {
    contributionTargetMappingRegistry,
    overrideContributionTargets,
    applyConfigNameRemaps,
    listContributionNameRemaps,
    type ContributionNameRemap,
} from '../../src/core/contribution-mapping';

describe('ContributionTargetMappingRegistry', () => {
    beforeEach(() => {
        contributionTargetMappingRegistry.resetForTesting();
    });

    describe('getEffectiveTargets', () => {
        it('returns original target when contribution has no name', () => {
            const contrib: Contribution = { label: 'No name' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('slot-a', contrib)).toEqual(['slot-a']);
        });

        it('returns original target when contribution has name but no remaps', () => {
            const contrib: Contribution = { name: 'view.unknown', label: 'Unknown' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('slot-a', contrib)).toEqual(['slot-a']);
        });

        it('returns app remap targets when app remap exists for name', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([
                { name: 'view.filebrowser', targets: ['sidebar-main', 'sidebar-auxiliary'] },
            ]);
            const contrib: Contribution = { name: 'view.filebrowser', label: 'Workspace' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('sidebar-auxiliary', contrib)).toEqual([
                'sidebar-main',
                'sidebar-auxiliary',
            ]);
        });

        it('returns global remap targets when only global remap exists', () => {
            contributionTargetMappingRegistry.setGlobalNameRemap('view.aiview', ['sidebar-main']);
            const contrib: Contribution = { name: 'view.aiview', label: 'AI' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('sidebar-auxiliary', contrib)).toEqual([
                'sidebar-main',
            ]);
        });

        it('prefers app remap over global remap', () => {
            contributionTargetMappingRegistry.setGlobalNameRemap('view.x', ['global-slot']);
            contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.x', targets: ['app-slot'] }]);
            const contrib: Contribution = { name: 'view.x', label: 'X' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('original', contrib)).toEqual(['app-slot']);
        });

        it('prefers app remap over original target', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.y', targets: ['remapped'] }]);
            const contrib: Contribution = { name: 'view.y', label: 'Y' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('original', contrib)).toEqual(['remapped']);
        });

        it('supports multiple targets for fan-out', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([
                { name: 'view.multi', targets: ['slot-1', 'slot-2', 'slot-3'] },
            ]);
            const contrib: Contribution = { name: 'view.multi', label: 'Multi' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('any', contrib)).toEqual([
                'slot-1',
                'slot-2',
                'slot-3',
            ]);
        });

        it('normalizes empty and duplicate targets in app remaps', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([
                { name: 'view.dup', targets: ['a', '', 'a', 'b', 'b'] },
            ]);
            const contrib: Contribution = { name: 'view.dup', label: 'Dup' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contrib)).toEqual(['a', 'b']);
        });

        it('disables contribution when app remap has empty targets array', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([
                { name: 'view.emptyTargets', targets: [] },
            ]);
            const contrib: Contribution = { name: 'view.emptyTargets', label: 'Empty' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('original-slot', contrib)).toEqual([
                // empty array -> disabled (no effective targets)
            ]);
        });

        it('disables contribution when global remap has empty targets array', () => {
            contributionTargetMappingRegistry.setGlobalNameRemap('view.emptyGlobal', []);
            const contrib: Contribution = { name: 'view.emptyGlobal', label: 'Empty' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('original-slot', contrib)).toEqual([
                // empty array -> disabled (no effective targets)
            ]);
        });
    });

    describe('applyAppNameRemaps', () => {
        it('clears app remaps when given undefined', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.a', targets: ['slot-a'] }]);
            contributionTargetMappingRegistry.applyAppNameRemaps(undefined);
            const contrib: Contribution = { name: 'view.a', label: 'A' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('original', contrib)).toEqual(['original']);
        });

        it('clears app remaps when given null', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.a', targets: ['slot-a'] }]);
            contributionTargetMappingRegistry.applyAppNameRemaps(null);
            const contrib: Contribution = { name: 'view.a', label: 'A' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('original', contrib)).toEqual(['original']);
        });

        it('clears app remaps when given empty array', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.a', targets: ['slot-a'] }]);
            contributionTargetMappingRegistry.applyAppNameRemaps([]);
            const contrib: Contribution = { name: 'view.a', label: 'A' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('original', contrib)).toEqual(['original']);
        });

        it('replaces previous app remaps entirely', () => {
            contributionTargetMappingRegistry.applyAppNameRemaps([
                { name: 'view.old', targets: ['old-slot'] },
            ]);
            contributionTargetMappingRegistry.applyAppNameRemaps([
                { name: 'view.new', targets: ['new-slot'] },
            ]);
            const contribOld: Contribution = { name: 'view.old', label: 'Old' };
            const contribNew: Contribution = { name: 'view.new', label: 'New' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contribOld)).toEqual(['x']);
            expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contribNew)).toEqual(['new-slot']);
        });
    });

    describe('setGlobalNameRemap', () => {
        it('stores global remap and getEffectiveTargets uses it', () => {
            contributionTargetMappingRegistry.setGlobalNameRemap('view.global', ['global-target']);
            const contrib: Contribution = { name: 'view.global', label: 'Global' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('orig', contrib)).toEqual(['global-target']);
        });

        it('normalizes duplicate and empty targets', () => {
            contributionTargetMappingRegistry.setGlobalNameRemap('view.norm', ['a', '', 'a', 'b']);
            const contrib: Contribution = { name: 'view.norm', label: 'Norm' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contrib)).toEqual(['a', 'b']);
        });
    });

    describe('listNameRemaps', () => {
        it('returns empty object when no remaps', () => {
            expect(contributionTargetMappingRegistry.listNameRemaps()).toEqual({});
        });

        it('returns app and global state for each known name', () => {
            contributionTargetMappingRegistry.setGlobalNameRemap('view.g', ['g-slot']);
            contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.a', targets: ['a-slot'] }]);
            contributionTargetMappingRegistry.applyAppNameRemaps([
                { name: 'view.a', targets: ['a1'] },
                { name: 'view.b', targets: ['b1'] },
            ]);
            const listed = contributionTargetMappingRegistry.listNameRemaps();
            expect(listed['view.g']).toEqual({ appTargets: undefined, globalTargets: ['g-slot'] });
            expect(listed['view.a']).toEqual({ appTargets: ['a1'], globalTargets: undefined });
            expect(listed['view.b']).toEqual({ appTargets: ['b1'], globalTargets: undefined });
        });
    });

    describe('resetForTesting', () => {
        it('clears global and app remaps', () => {
            contributionTargetMappingRegistry.setGlobalNameRemap('view.g', ['g']);
            contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.a', targets: ['a'] }]);
            contributionTargetMappingRegistry.resetForTesting();
            const contribG: Contribution = { name: 'view.g', label: 'G' };
            const contribA: Contribution = { name: 'view.a', label: 'A' };
            expect(contributionTargetMappingRegistry.getEffectiveTargets('orig', contribG)).toEqual(['orig']);
            expect(contributionTargetMappingRegistry.getEffectiveTargets('orig', contribA)).toEqual(['orig']);
            expect(contributionTargetMappingRegistry.listNameRemaps()).toEqual({});
        });
    });
});

describe('overrideContributionTargets', () => {
    beforeEach(() => {
        contributionTargetMappingRegistry.resetForTesting();
    });

    it('accepts string target and sets global remap', () => {
        overrideContributionTargets('view.single', 'sidebar-main');
        const contrib: Contribution = { name: 'view.single', label: 'Single' };
        expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contrib)).toEqual(['sidebar-main']);
    });

    it('accepts string[] targets and sets global remap', () => {
        overrideContributionTargets('view.multi', ['slot-1', 'slot-2']);
        const contrib: Contribution = { name: 'view.multi', label: 'Multi' };
        expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contrib)).toEqual(['slot-1', 'slot-2']);
    });
});

describe('applyConfigNameRemaps', () => {
    beforeEach(() => {
        contributionTargetMappingRegistry.resetForTesting();
    });

    it('applies config object with string values', () => {
        applyConfigNameRemaps({
            'view.a': 'slot-a',
            'view.b': 'slot-b',
        });
        const contribA: Contribution = { name: 'view.a', label: 'A' };
        const contribB: Contribution = { name: 'view.b', label: 'B' };
        expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contribA)).toEqual(['slot-a']);
        expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contribB)).toEqual(['slot-b']);
    });

    it('applies config object with string[] values', () => {
        applyConfigNameRemaps({
            'view.multi': ['slot-1', 'slot-2'],
        });
        const contrib: Contribution = { name: 'view.multi', label: 'Multi' };
        expect(contributionTargetMappingRegistry.getEffectiveTargets('x', contrib)).toEqual(['slot-1', 'slot-2']);
    });
});

describe('listContributionNameRemaps', () => {
    beforeEach(() => {
        contributionTargetMappingRegistry.resetForTesting();
    });

    it('returns same structure as registry listNameRemaps', () => {
        contributionTargetMappingRegistry.applyAppNameRemaps([{ name: 'view.x', targets: ['t'] }]);
        expect(listContributionNameRemaps()).toEqual(contributionTargetMappingRegistry.listNameRemaps());
    });
});
