import { beforeEach, describe, expect, it, vi } from 'vitest';

const publishMock = vi.fn();
const persisted: Record<string, any> = {};

const persistenceServiceMock = {
  getObject: vi.fn(async (key: string) => persisted[key]),
  persistObject: vi.fn(async (key: string, value: unknown) => {
    persisted[key] = value;
  }),
};

vi.mock('../../src/core/events', () => ({
  publish: publishMock,
}));

vi.mock('../../src/core/persistenceservice', () => ({
  persistenceService: persistenceServiceMock,
}));

vi.mock('../../src/core/di', () => ({
  rootContext: { put: vi.fn() },
}));

describe('settingsservice', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    Object.keys(persisted).forEach((k) => delete persisted[k]);
  });

  it('merges schemas and returns ordered categories', async () => {
    const { appSettings } = await import('../../src/core/settingsservice');
    appSettings.registerSchema({
      type: 'object',
      properties: {
        ui: { title: 'UI', order: 2, properties: { theme: { type: 'string' } } },
      },
    });
    appSettings.registerSchema({
      type: 'object',
      properties: {
        editor: { title: 'Editor', order: 1, properties: { tabSize: { type: 'number' } } },
      },
    });

    const categories = appSettings.getCategories();
    expect(categories.map((c) => c.id)).toEqual(['editor', 'ui']);
    expect(appSettings.getSchemaForSettingKey('editor.tabSize')?.type).toBe('number');
  });

  it('supports nested setAt/getAt and persists changes', async () => {
    const { appSettings, SETTINGS_FILE_PATH } = await import('../../src/core/settingsservice');
    await appSettings.setAt('editor.fontSize', 14);
    await appSettings.setAt('editor.wordWrap', true);

    expect(await appSettings.getAt('editor.fontSize')).toBe(14);
    expect(await appSettings.getAt('editor.wordWrap')).toBe(true);
    expect(persistenceServiceMock.persistObject).toHaveBeenCalledWith(
      SETTINGS_FILE_PATH,
      expect.objectContaining({ editor: { fontSize: 14, wordWrap: true } })
    );
  });

  it('returns undefined when traversing invalid path roots', async () => {
    const { appSettings } = await import('../../src/core/settingsservice');
    await appSettings.set('editor', 42);
    expect(await appSettings.getAt('editor.fontSize')).toBeUndefined();
  });
});
