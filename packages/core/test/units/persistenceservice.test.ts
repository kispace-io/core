import 'fake-indexeddb/auto';
import { describe, it, expect } from 'vitest';
import { PersistenceService } from '../../src/core/persistenceservice';

describe('PersistenceService', () => {
  const service = new PersistenceService();

  it('returns undefined for non-existent key', async () => {
    const value = await service.getObject('non-existent-key');
    expect(value).toBeUndefined();
  });

  it('persists and retrieves a string', async () => {
    const key = 'test-string';
    const value = 'hello';
    await service.persistObject(key, value);
    expect(await service.getObject(key)).toBe(value);
  });

  it('persists and retrieves an object', async () => {
    const key = 'test-object';
    const value = { a: 1, b: [2, 3], nested: { x: true } };
    await service.persistObject(key, value);
    expect(await service.getObject(key)).toEqual(value);
  });

  it('persists and retrieves null', async () => {
    const key = 'test-null';
    await service.persistObject(key, null);
    expect(await service.getObject(key)).toBeNull();
  });

  it('overwrites existing key', async () => {
    const key = 'test-overwrite';
    await service.persistObject(key, 'first');
    expect(await service.getObject(key)).toBe('first');
    await service.persistObject(key, 'second');
    expect(await service.getObject(key)).toBe('second');
  });

  it('stores multiple keys independently', async () => {
    await service.persistObject('multi-a', 1);
    await service.persistObject('multi-b', { x: 2 });
    await service.persistObject('multi-c', [3]);
    expect(await service.getObject('multi-a')).toBe(1);
    expect(await service.getObject('multi-b')).toEqual({ x: 2 });
    expect(await service.getObject('multi-c')).toEqual([3]);
  });
});
