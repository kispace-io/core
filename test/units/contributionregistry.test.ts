import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/core/events', () => ({ publish: vi.fn() }));
vi.mock('../../src/core/di', () => ({ rootContext: { put: vi.fn() } }));

import { Signal } from '@lit-labs/signals';
import { publish } from '../../src/core/events';
import { contributionRegistry, type Contribution } from '../../src/core/contributionregistry';

describe('ContributionRegistry', () => {
  beforeEach(() => {
    vi.mocked(publish).mockClear();
  });

  it('returns empty array for new target via getContributions', () => {
    const target = 'test-empty-' + Math.random();
    expect(contributionRegistry.getContributions(target)).toEqual([]);
  });

  it('registers and returns contributions in order', () => {
    const target = 'test-order-' + Math.random();
    const c1: Contribution = { label: 'First' };
    const c2: Contribution = { label: 'Second' };
    contributionRegistry.registerContribution(target, c1);
    contributionRegistry.registerContribution(target, c2);
    const list = contributionRegistry.getContributions<Contribution>(target);
    expect(list).toHaveLength(2);
    expect(list[0].label).toBe('First');
    expect(list[1].label).toBe('Second');
  });

  it('converts disabled function to Signal.Computed', () => {
    const target = 'test-disabled-' + Math.random();
    const contribution: Contribution = {
      label: 'With disabled',
      disabled: () => true,
    };
    contributionRegistry.registerContribution(target, contribution);
    expect(contribution.disabled).toBeDefined();
    expect(contribution.disabled).not.toBeInstanceOf(Function);
    expect((contribution.disabled as { get(): boolean }).get()).toBe(true);
  });

  it('leaves existing Signal.Computed disabled unchanged', () => {
    const target = 'test-computed-' + Math.random();
    const computed = new Signal.Computed(() => false);
    const contribution: Contribution = {
      label: 'Already computed',
      disabled: computed,
    };
    contributionRegistry.registerContribution(target, contribution);
    expect(contribution.disabled).toBe(computed);
    expect((contribution.disabled as { get(): boolean }).get()).toBe(false);
  });
});
