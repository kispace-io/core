import { describe, expect, it } from 'vitest';
import { icon, parseIconSpec } from '../../src/core/icon-utils';

describe('icon-utils', () => {
  it('parses icon spec with and without library', () => {
    expect(parseIconSpec('file')).toEqual({ name: 'file' });
    expect(parseIconSpec('docks mark-github')).toEqual({ library: 'docks', name: 'mark-github' });
  });

  it('handles empty spec', () => {
    expect(parseIconSpec('')).toEqual({ name: '' });
  });

  it('renders icon template', () => {
    const template = icon('docks mark-github', { label: 'GitHub', slot: 'prefix' });
    expect(template).toBeTruthy();
  });
});
