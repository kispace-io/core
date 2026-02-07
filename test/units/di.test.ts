import { describe, it, expect } from 'vitest';
import { DependencyContext } from '../../src/core/di';

describe('DependencyContext', () => {
  it('stores and retrieves values via put and get', () => {
    const ctx = new DependencyContext({});
    ctx.put('key', 'value');
    expect(ctx.getProxy().key).toBe('value');
  });

  it('returns undefined for missing key', () => {
    const ctx = new DependencyContext({});
    expect(ctx.getProxy().missing).toBeUndefined();
  });

  it('createChild returns a child context', () => {
    const parent = new DependencyContext({});
    const child = parent.createChild();
    expect(child).toBeInstanceOf(DependencyContext);
    expect(parent.getChildren()).toContain(child);
    expect(child.getParent()).toBe(parent);
  });

  it('child inherits parent values via proxy', () => {
    const parent = new DependencyContext({});
    parent.put('fromParent', 1);
    const child = parent.createChild({ own: 2 });
    expect(child.getProxy().fromParent).toBe(1);
    expect(child.getProxy().own).toBe(2);
  });

  it('child value shadows parent', () => {
    const parent = new DependencyContext({});
    parent.put('key', 'parent');
    const child = parent.createChild({ key: 'child' });
    expect(child.getProxy().key).toBe('child');
  });

  it('destroy removes child from parent', () => {
    const parent = new DependencyContext({});
    const child = parent.createChild();
    expect(parent.getChildren()).toHaveLength(1);
    child.destroy();
    expect(parent.getChildren()).toHaveLength(0);
    expect(child.getParent()).toBeUndefined();
  });

  it('accepts initial variables in constructor', () => {
    const ctx = new DependencyContext({ a: 1, b: 2 });
    expect(ctx.getProxy().a).toBe(1);
    expect(ctx.getProxy().b).toBe(2);
  });
});
