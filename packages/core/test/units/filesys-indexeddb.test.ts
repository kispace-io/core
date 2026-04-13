import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FileContentType } from '../../src/core/filesys/common';
import {
  IDBRootDirectory,
  deleteIndexedDbWorkspaceData,
} from '../../src/core/filesys/indexeddb';

describe('filesys/indexeddb', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('creates and reads nested file contents', async () => {
    const root = new IDBRootDirectory('Root', 'root-a');
    const created = await root.getResource('docs/readme.txt', { create: true });
    expect(created).toBeTruthy();
    await (created as any).saveContents('hello indexeddb');

    const file = await root.getResource('docs/readme.txt');
    const content = await (file as any).getContents({ contentType: FileContentType.TEXT });

    expect(content).toBe('hello indexeddb');
  });

  it('migrates legacy string content to blob on read', async () => {
    const db = await new Promise<IDBDatabase>((resolve, reject) => {
      const req = indexedDB.open('eclipse-docks-workspace-idb', 1);
      req.onupgradeneeded = () => {
        req.result.createObjectStore('files');
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    await new Promise<void>((resolve, reject) => {
      const tx = db.transaction('files', 'readwrite');
      const store = tx.objectStore('files');
      const req = store.put({ type: 'file', content: 'legacy-text', mimeType: 'text/plain' }, 'root-b/legacy.txt');
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });

    const root = new IDBRootDirectory('Root', 'root-b');
    const file = await root.getResource('legacy.txt');
    expect(await (file as any).getContents()).toBe('legacy-text');

    const migrated = await new Promise<any>((resolve, reject) => {
      const tx = db.transaction('files', 'readonly');
      const store = tx.objectStore('files');
      const req = store.get('root-b/legacy.txt');
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    expect(migrated.content).toBeInstanceOf(Blob);
  });

  it('deletes all root data through helper', async () => {
    const root = new IDBRootDirectory('Root', 'root-c');
    const file = await root.getResource('a.txt', { create: true });
    await (file as any).saveContents('x');
    expect(await deleteIndexedDbWorkspaceData(root)).toBe(true);

    const again = await root.getResource('a.txt');
    expect(again).toBeNull();
  });
});
