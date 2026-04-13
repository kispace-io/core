import { describe, expect, it, vi } from 'vitest';
import { publish, subscribe, unsubscribe } from '../../src/core/events';

describe('events', () => {
  it('publishes asynchronously to subscribers', async () => {
    const callback = vi.fn();
    const token = subscribe('topic/a', callback);

    const published = publish('topic/a', { x: 1 });
    expect(published).toBe(true);
    expect(callback).not.toHaveBeenCalled();

    await Promise.resolve();
    expect(callback).toHaveBeenCalledWith({ x: 1 });

    unsubscribe(token);
  });

  it('returns false when publishing to topic without subscribers', () => {
    expect(publish('topic/none', {})).toBe(false);
  });

  it('stops delivering after unsubscribe', async () => {
    const callback = vi.fn();
    const token = subscribe('topic/b', callback);
    unsubscribe(token);
    publish('topic/b', 1);
    await Promise.resolve();
    expect(callback).not.toHaveBeenCalled();
  });
});
