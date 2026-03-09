/**
 * Integration tests: AppDefinition remaps, contribution registry, and mapping registry
 * together. Mirrors the loadApp flow (apply remaps, register contributions, query slots).
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/core/events', () => ({ publish: vi.fn() }));
vi.mock('../../src/core/di', () => ({ rootContext: { put: vi.fn() } }));
import { publish } from '../../src/core/events';
import { contributionTargetMappingRegistry } from '../../src/core/contribution-mapping';
import { contributionRegistry, TOPIC_CONTRIBUTEIONS_CHANGED, type Contribution } from '../../src/core/contributionregistry';
import type { AppDefinition } from '../../src/core/apploader';

describe('AppDefinition remaps + contribution registry integration', () => {
  beforeEach(() => {
    vi.mocked(publish).mockClear();
    contributionTargetMappingRegistry.resetForTesting();
  });

  function applyAppRemaps(remaps: AppDefinition['remaps']) {
    contributionTargetMappingRegistry.applyAppNameRemaps(remaps ?? undefined);
  }

  it('after applying AppDefinition.remaps, getContributions(remappedSlot) returns contributions with that name', () => {
    const uid = Math.random().toString(36).slice(2, 10);
    const sidebarMain = 'int-sidebar-main-' + uid;
    const sidebarAux = 'int-sidebar-aux-' + uid;
    const viewName = 'view.aiview.' + uid;

    const app: AppDefinition = {
      name: 'int-test-app',
      remaps: [{ name: viewName, targets: [sidebarMain] }],
    };

    const aiviewContribution: Contribution = {
      name: viewName,
      label: 'AI Assistant',
      icon: 'robot',
    };
    contributionRegistry.registerContribution(sidebarAux, aiviewContribution);

    applyAppRemaps(app.remaps);

    const fromMain = contributionRegistry.getContributions<Contribution>(sidebarMain);
    const fromAux = contributionRegistry.getContributions<Contribution>(sidebarAux);

    expect(fromMain).toHaveLength(1);
    expect(fromMain[0].name).toBe(viewName);
    expect(fromAux).toHaveLength(0);
  });

  it('after applying remaps and registering app contributions, both platform and app contributions appear in remapped slot', () => {
    const uid = Math.random().toString(36).slice(2, 10);
    const sidebarMain = 'int-slot-main-' + uid;
    const sidebarAux = 'int-slot-aux-' + uid;
    const toolbarMain = 'int-toolbar-' + uid;
    const viewAiview = 'view.aiview.' + uid;
    const viewFilebrowser = 'view.filebrowser.' + uid;
    const toolbarBrand = 'toolbar.brand.' + uid;

    const app: AppDefinition = {
      name: 'int-test-app',
      remaps: [
        { name: viewAiview, targets: [sidebarMain] },
        { name: viewFilebrowser, targets: [sidebarMain] },
      ],
      contributions: {
        ui: [
          { target: toolbarMain, label: 'Brand', name: toolbarBrand },
        ],
      },
    };

    contributionRegistry.registerContribution(sidebarAux, {
      name: viewAiview,
      label: 'AI Assistant',
      icon: 'robot',
    });
    contributionRegistry.registerContribution(sidebarMain, {
      name: viewFilebrowser,
      label: 'Workspace',
      icon: 'folder-open',
    });

    applyAppRemaps(app.remaps);

    if (app.contributions?.ui) {
      app.contributions.ui.forEach((c) => {
        const target = (c as Contribution & { target?: string }).target;
        if (target) contributionRegistry.registerContribution(target, c as Contribution);
      });
    }

    const fromMain = contributionRegistry.getContributions<Contribution>(sidebarMain);
    const fromToolbar = contributionRegistry.getContributions<Contribution>(toolbarMain);

    expect(fromMain.map((c) => c.name).sort()).toEqual([viewAiview, viewFilebrowser]);
    expect(fromToolbar).toHaveLength(1);
    expect(fromToolbar[0].name).toBe(toolbarBrand);
  });

  it('app switch: applying different remaps changes getContributions for remapped slots', () => {
    const uid = Math.random().toString(36).slice(2, 10);
    const slotLeft = 'int-left-' + uid;
    const slotRight = 'int-right-' + uid;
    const viewName = 'view.aiview.switch.' + uid;

    contributionRegistry.registerContribution(slotRight, {
      name: viewName,
      label: 'AI',
      icon: 'robot',
    });

    applyAppRemaps([{ name: viewName, targets: [slotLeft] }]);
    expect(contributionRegistry.getContributions<Contribution>(slotLeft)).toHaveLength(1);
    expect(contributionRegistry.getContributions<Contribution>(slotRight)).toHaveLength(0);

    applyAppRemaps([{ name: viewName, targets: [slotRight] }]);
    expect(contributionRegistry.getContributions<Contribution>(slotLeft)).toHaveLength(0);
    expect(contributionRegistry.getContributions<Contribution>(slotRight)).toHaveLength(1);

    applyAppRemaps([]);
    expect(contributionRegistry.getContributions<Contribution>(slotLeft)).toHaveLength(0);
    expect(contributionRegistry.getContributions<Contribution>(slotRight)).toHaveLength(1);
  });

  it('publishing CONTRIBUTIONS_CHANGED for remapped targets after applyAppNameRemaps mirrors loadApp behavior', () => {
    const slotA = 'int-pub-a-' + Math.random();
    const slotB = 'int-pub-b-' + Math.random();

    contributionRegistry.registerContribution(slotA, {
      name: 'view.remapped',
      label: 'Remapped',
      icon: 'icon',
    });

    applyAppRemaps([{ name: 'view.remapped', targets: [slotB] }]);

    const remappedTargets = new Set<string>();
    for (const r of [{ name: 'view.remapped', targets: [slotB] }]) {
      for (const t of r.targets) remappedTargets.add(t);
    }
    for (const target of remappedTargets) {
      const contributions = contributionRegistry.getContributions(target);
      publish(TOPIC_CONTRIBUTEIONS_CHANGED, { target, contributions });
    }

    expect(publish).toHaveBeenCalledWith(TOPIC_CONTRIBUTEIONS_CHANGED, {
      target: slotB,
      contributions: expect.arrayContaining([
        expect.objectContaining({ name: 'view.remapped', label: 'Remapped' }),
      ]),
    });
  });
});

