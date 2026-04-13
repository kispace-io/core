import { describe, expect, it } from 'vitest';
import { esmShService } from '../../src/core/esmsh-service';

describe('esmsh-service', () => {
  it('parses source identifiers and normalizes to esm.sh URL', () => {
    expect(esmShService.isSourceIdentifier('react@18')).toBe(true);
    expect(esmShService.normalizeToEsmSh('react@18')).toBe('https://esm.sh/react@18');
    expect(esmShService.normalizeToEsmSh('gh/org/repo@main/src/index.ts')).toBe(
      'https://esm.sh/gh/org/repo@main/src/index.ts'
    );
  });

  it('does not treat direct http URLs as source identifiers', () => {
    const source = 'https://example.com/module.js';
    expect(esmShService.isSourceIdentifier(source)).toBe(false);
    expect(esmShService.normalizeToEsmSh(source)).toBe(source);
  });

  it('converts GitHub URLs to gh/ source format', () => {
    expect(esmShService.convertGitHubUrlToSource('https://github.com/eclipse-docks/core')).toBe(
      'gh/eclipse-docks/core'
    );
    expect(
      esmShService.convertGitHubUrlToSource(
        'https://github.com/eclipse-docks/core/blob/main/src/index.ts'
      )
    ).toBe('gh/eclipse-docks/core@main/src/index.ts');
  });
});
