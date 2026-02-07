import { describe, it, expect } from 'vitest';
import { treeNodeComparator, type TreeNode } from '../../src/core/tree-utils';

function node(label: string, leaf: boolean, children: TreeNode[] = []): TreeNode {
  return { data: null, label, leaf, children };
}

describe('treeNodeComparator', () => {
  it('sorts folders before files', () => {
    const folder = node('a', false);
    const file = node('b', true);
    expect(treeNodeComparator(folder, file)).toBe(-1);
    expect(treeNodeComparator(file, folder)).toBe(1);
  });

  it('sorts by label when both are folders', () => {
    const a = node('alpha', false);
    const b = node('beta', false);
    expect(treeNodeComparator(a, b)).toBeLessThan(0);
    expect(treeNodeComparator(b, a)).toBeGreaterThan(0);
  });

  it('sorts by label when both are files', () => {
    const a = node('file-a', true);
    const b = node('file-b', true);
    expect(treeNodeComparator(a, b)).toBeLessThan(0);
    expect(treeNodeComparator(b, a)).toBeGreaterThan(0);
  });

  it('returns 0 when labels are equal and same type', () => {
    const a = node('same', true);
    const b = node('same', true);
    expect(treeNodeComparator(a, b)).toBe(0);
  });

  it('handles empty labels', () => {
    const a = node('', true);
    const b = node('z', true);
    expect(treeNodeComparator(a, b)).toBeLessThan(0);
  });

  it('uses localeCompare for lexicographic order', () => {
    const a = node('A', false);
    const b = node('a', false);
    expect(treeNodeComparator(a, b)).not.toBe(0);
  });
});
