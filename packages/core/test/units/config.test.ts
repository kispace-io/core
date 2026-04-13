import { describe, expect, it } from 'vitest';
import { configureFramework, getFrameworkConfig } from '../../src/core/config';

describe('config', () => {
  it('returns empty config by default', () => {
    expect(getFrameworkConfig()).toEqual({});
  });

  it('merges configured values', () => {
    configureFramework({ logger: { level: 'debug' } });
    expect(getFrameworkConfig()).toEqual({ logger: { level: 'debug' } });
  });
});
