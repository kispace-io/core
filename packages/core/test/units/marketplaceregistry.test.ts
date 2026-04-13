import { beforeEach, describe, expect, it, vi } from 'vitest';

const appSettingsGetMock = vi.fn(async () => []);
const appSettingsSetMock = vi.fn(async () => undefined);
const publishMock = vi.fn();
const registerExtensionMock = vi.fn();
const getExtensionsMock = vi.fn(() => []);

vi.mock('../../src/core/settingsservice', () => ({
  appSettings: {
    get: appSettingsGetMock,
    set: appSettingsSetMock,
  },
}));

vi.mock('../../src/core/events', () => ({
  publish: publishMock,
}));

vi.mock('../../src/core/logger', () => ({
  createLogger: vi.fn(() => ({ debug: vi.fn(), info: vi.fn(), warn: vi.fn(), error: vi.fn() })),
}));

vi.mock('../../src/core/extensionregistry', () => ({
  extensionRegistry: {
    registerExtension: registerExtensionMock,
    getExtensions: getExtensionsMock,
  },
}));

vi.mock('../../src/core/di', () => ({
  rootContext: { put: vi.fn() },
}));

describe('marketplaceregistry', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    (globalThis as any).fetch = vi.fn(async () => ({
      ok: true,
      json: async () => ({ extensions: [{ id: 'ext.a', name: 'A' }] }),
      status: 200,
      statusText: 'OK',
    }));
    getExtensionsMock.mockReturnValue([]);
  });

  it('adds only valid, unique catalog URLs', async () => {
    const { marketplaceRegistry } = await import('../../src/core/marketplaceregistry');
    await marketplaceRegistry.addCatalogUrls([
      'https://example.com/catalog.json',
      'invalid',
      'https://example.com/catalog.json',
    ]);

    expect(marketplaceRegistry.getCatalogUrls()).toEqual(['https://example.com/catalog.json']);
    expect(appSettingsSetMock).toHaveBeenCalled();
  });

  it('refreshes catalogs and registers new external extensions', async () => {
    const { marketplaceRegistry } = await import('../../src/core/marketplaceregistry');
    await marketplaceRegistry.addCatalogUrl('https://example.com/catalog.json');
    await marketplaceRegistry.refreshCatalogs();

    expect(registerExtensionMock).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'ext.a', external: true })
    );
    expect(publishMock).toHaveBeenCalled();
  });
});
