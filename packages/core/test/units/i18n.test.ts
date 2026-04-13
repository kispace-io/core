import { beforeEach, describe, expect, it, vi } from 'vitest';

const appSettingsGetMock = vi.fn(async () => 'en');
const subscribeMock = vi.fn();

vi.mock('../../src/core/settingsservice', () => ({
  appSettings: { get: appSettingsGetMock },
  TOPIC_SETTINGS_CHANGED: 'events/settings/changed',
}));

vi.mock('../../src/core/events', () => ({
  subscribe: subscribeMock,
}));

describe('i18n', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
    Object.defineProperty(globalThis, 'navigator', {
      value: { languages: ['en-US'], language: 'en-US' },
      configurable: true,
    });
  });

  it('loads locale files and interpolates parameters', async () => {
    const { i18n } = await import('../../src/core/i18n');
    const labels = await i18n({
      '/x/messages.en.json': async () => ({ default: { hello: 'Hello {name}' } }),
      '/x/messages.de.json': async () => ({ default: { hello: 'Hallo {name}' } }),
    });

    expect(String(labels.hello)).toBe('Hello {name}');
    expect(labels.hello({ name: 'Ada' })).toBe('Hello Ada');
  });

  it('falls back to key when translation missing', async () => {
    const { i18n } = await import('../../src/core/i18n');
    const labels = await i18n({
      '/x/messages.en.json': async () => ({ default: { present: 'Present' } }),
    });
    expect(String((labels as any).missing_key)).toBe('missing_key');
  });
});
