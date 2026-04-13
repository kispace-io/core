import { beforeEach, describe, expect, it, vi } from 'vitest';

const getObjectMock = vi.fn();
const persistObjectMock = vi.fn();
const publishMock = vi.fn();

vi.mock('../../src/core/persistenceservice', () => ({
  persistenceService: {
    getObject: getObjectMock,
    persistObject: persistObjectMock,
  },
}));

vi.mock('../../src/core/events', () => ({
  publish: publishMock,
}));

vi.mock('../../src/core/di', () => ({
  rootContext: { put: vi.fn() },
}));

vi.mock('../../src/core/logger', () => ({
  createLogger: vi.fn(() => ({ debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() })),
}));

describe('filesys/common workspace restore behavior', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    getObjectMock.mockResolvedValue(null);
    persistObjectMock.mockResolvedValue(undefined);
  });

  it('creates placeholder folder when persisted type has no contribution', async () => {
    getObjectMock.mockImplementation(async (key: string) =>
      key === 'workspace_data'
        ? { folders: [{ type: 'remote-backend', data: { name: 'Remote Folder' } }] }
        : null
    );
    const { WorkspaceService, isWorkspaceFolderPlaceholder } = await import('../../src/core/filesys/common');

    const service = new WorkspaceService();
    const folders = await service.getFolders();
    expect(folders).toEqual([{ name: 'Remote Folder', type: 'remote-backend' }]);
    const workspace = await service.getWorkspace();
    const children = await workspace?.listChildren(false);

    expect(children?.length).toBe(1);
    expect(children?.[0].getName()).toBe('Remote Folder');
    expect(isWorkspaceFolderPlaceholder(children?.[0] as any)).toBe(true);
  });

  it('replaces placeholder once matching contribution is registered', async () => {
    getObjectMock.mockImplementation(async (key: string) =>
      key === 'workspace_data'
        ? { folders: [{ type: 'remote-backend', data: { name: 'Remote Folder' } }] }
        : null
    );
    const { WorkspaceService, Directory } = await import('../../src/core/filesys/common');

    class TestDirectory extends Directory {
      constructor(private readonly name: string) {
        super();
      }
      getName(): string {
        return this.name;
      }
      getParent() {
        return undefined;
      }
      async listChildren() {
        return [];
      }
      async getResource() {
        return null;
      }
      touch(): void {}
      async delete(): Promise<void> {}
      async copyTo(): Promise<void> {}
      async rename(): Promise<void> {}
    }

    const service = new WorkspaceService();
    service.registerContribution({
      type: 'remote-backend',
      name: 'Remote',
      canHandle: () => false,
      connect: async () => new TestDirectory('unused'),
      restore: async () => new TestDirectory('Recovered Folder'),
      persist: async () => ({}),
    });

    await new Promise((resolve) => setTimeout(resolve, 0));
    const workspace = await service.getWorkspace();
    const children = await workspace!.listChildren(false);

    expect(children[0].getName()).toBe('Recovered Folder');
  });
});
