import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createCommandHarness } from '../../core/test/helpers/command-harness';

const harness = createCommandHarness();
const toastInfoMock = vi.fn();
const runAsyncMock = vi.fn(async (_name: string, fn: (p: any) => Promise<unknown>) =>
  fn({ message: '', progress: 0 }),
);
const activeSelectionSignalMock = { get: vi.fn() };
const jsZipLoadAsyncMock = vi.fn();

vi.mock('@eclipse-docks/core', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@eclipse-docks/core')>();
  return {
    ...actual,
    registerAll: harness.registerAllMock,
    toastError: harness.toastErrorMock,
    toastInfo: toastInfoMock,
    taskService: { runAsync: runAsyncMock },
    activeSelectionSignal: activeSelectionSignalMock,
  };
});

vi.mock('jszip', () => ({
  default: {
    loadAsync: (...args: unknown[]) => jsZipLoadAsyncMock(...args),
  },
}));

describe('unzip command', () => {
  async function setupWorkspace(name: string) {
    const { workspaceService } = await import('@eclipse-docks/core');
    await workspaceService.disconnectWorkspace();
    await workspaceService.connectFolder({ indexeddb: true, name });
    return workspaceService;
  }

  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('extracts zip entries into target folder', async () => {
    const folder = `unzip-${Date.now()}`;
    const workspaceService = await setupWorkspace(folder);
    const workspace = await workspaceService.getWorkspace();
    const zipFile = await workspace?.getResource(`${folder}/archive.zip`, { create: true });
    await (zipFile as any).saveContents(new Blob(['x']));
    activeSelectionSignalMock.get.mockReturnValue({ path: `${folder}/archive.zip` });
    jsZipLoadAsyncMock.mockResolvedValue({
      files: {
        'a.txt': { dir: false, async: async () => new Blob(['a']) },
      },
    });

    await import('../src/commands/unzip');
    const cmd = harness.getRegistered('unzip');
    await cmd.handler?.execute({ params: { target: `${folder}/archive/` } });
    expect(await workspace?.getResource(`${folder}/archive/a.txt`)).toBeTruthy();
  });
});
