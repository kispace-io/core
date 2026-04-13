import { beforeEach, describe, expect, it, vi } from 'vitest';

class WorkerMock {
  static instance: WorkerMock | undefined;
  onmessage: ((event: MessageEvent<{ type: string; value?: unknown; message?: string }>) => void) | null = null;
  onerror: ((event: ErrorEvent) => void) | null = null;
  terminate = vi.fn();
  postMessage = vi.fn();
  constructor() {
    WorkerMock.instance = this;
  }
}

vi.mock('../../src/core/js-runtime-worker.js?worker&inline', () => ({
  default: WorkerMock,
}));

describe('createJsRuntime', () => {
  beforeEach(() => {
    vi.resetModules();
    WorkerMock.instance = undefined;
  });

  it('resolves execute() from worker result message', async () => {
    const { createJsRuntime } = await import('../../src/core/js-runtime');
    const runtime = createJsRuntime();
    const promise = runtime.execute('1+1');

    WorkerMock.instance!.onmessage?.({ data: { type: 'result', value: 2 } } as MessageEvent<any>);
    await expect(promise).resolves.toBe(2);
  });

  it('rejects execute() from worker error message', async () => {
    const { createJsRuntime } = await import('../../src/core/js-runtime');
    const runtime = createJsRuntime();
    const promise = runtime.execute('throw new Error()');

    WorkerMock.instance!.onmessage?.({
      data: { type: 'error', message: 'boom' },
    } as MessageEvent<any>);
    await expect(promise).rejects.toThrow('boom');
  });

  it('terminates worker on close()', async () => {
    const { createJsRuntime } = await import('../../src/core/js-runtime');
    const runtime = createJsRuntime();
    const p = runtime.execute('42');
    WorkerMock.instance!.onmessage?.({ data: { type: 'result', value: 42 } } as MessageEvent<any>);
    await p;
    runtime.close();

    expect(WorkerMock.instance?.terminate).toHaveBeenCalledTimes(1);
  });
});
