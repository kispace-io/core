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

describe('WorkspaceService integration flow', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    getObjectMock.mockResolvedValue(null);
    persistObjectMock.mockResolvedValue(undefined);
  });

  it('copies and moves files across connected folders', async () => {
    const { workspaceService, Directory, File } = await import('../../src/core/filesys/common');

    class InMemoryFile extends File {
      constructor(
        private readonly name: string,
        private parent: InMemoryDirectory,
        private value: string
      ) {
        super();
      }
      getName() {
        return this.name;
      }
      getParent() {
        return this.parent;
      }
      async getContents() {
        return this.value;
      }
      async saveContents(contents: any) {
        this.value = String(contents ?? '');
      }
      async size() {
        return this.value.length;
      }
      async delete() {
        this.parent.remove(this.name);
      }
      async copyTo() {}
      async rename() {}
    }

    class InMemoryDirectory extends Directory {
      private children = new Map<string, InMemoryDirectory | InMemoryFile>();
      constructor(private readonly name: string, private readonly parent?: InMemoryDirectory) {
        super();
      }
      getName() {
        return this.name;
      }
      getParent() {
        return this.parent;
      }
      remove(name: string) {
        this.children.delete(name);
      }
      async listChildren() {
        return Array.from(this.children.values());
      }
      async getResource(path: string, options?: { create?: boolean }) {
        const segments = path.split('/').filter(Boolean);
        if (segments.length === 0) return this;
        let current: InMemoryDirectory = this;
        for (let i = 0; i < segments.length; i++) {
          const seg = segments[i];
          const isLast = i === segments.length - 1;
          const existing = current.children.get(seg);
          if (!existing) {
            if (!options?.create) return null;
            if (isLast) {
              const f = new InMemoryFile(seg, current, '');
              current.children.set(seg, f);
              return f;
            }
            const d = new InMemoryDirectory(seg, current);
            current.children.set(seg, d);
            current = d;
            continue;
          }
          if (isLast) return existing;
          if (existing instanceof InMemoryDirectory) {
            current = existing;
            continue;
          }
          return null;
        }
        return current;
      }
      touch(): void {}
      async delete(name?: string): Promise<void> {
        if (name) this.children.delete(name);
      }
      async copyTo(): Promise<void> {}
      async rename(): Promise<void> {}
      setFile(name: string, content: string) {
        const f = new InMemoryFile(name, this, content);
        this.children.set(name, f);
        return f;
      }
    }

    await workspaceService.disconnectWorkspace();
    const typeA = `alpha-${Math.random().toString(36).slice(2, 8)}`;
    const typeB = `beta-${Math.random().toString(36).slice(2, 8)}`;
    const mkContribution = (type: string) => ({
      type,
      name: type,
      canHandle: (input: any) => input?.type === type,
      connect: async (input: any) => new InMemoryDirectory(input.name ?? type),
      persist: async () => ({}),
    });
    workspaceService.registerContribution(mkContribution(typeA));
    workspaceService.registerContribution(mkContribution(typeB));

    await workspaceService.connectFolder({ type: typeA, name: 'A' });
    await workspaceService.connectFolder({ type: typeB, name: 'B' });
    const root = await workspaceService.getWorkspace();
    const folders = await root!.listChildren(false);
    const sourceDir = folders.find((f) => f.getName() === 'A') as InMemoryDirectory;
    const targetDir = folders.find((f) => f.getName() === 'B') as InMemoryDirectory;
    const sourceFile = sourceDir.setFile('hello.txt', 'hello world');

    await workspaceService.copyResource(sourceFile, targetDir, { newName: 'copied.txt' });
    const copied = await targetDir.getResource('copied.txt');
    expect(await (copied as any).getContents()).toBe('hello world');

    await workspaceService.copyResource(sourceFile, targetDir, { move: true, newName: 'moved.txt' });
    expect(await sourceDir.getResource('hello.txt')).toBeNull();
    expect(await (await targetDir.getResource('moved.txt') as any).getContents()).toBe('hello world');
  });
});
