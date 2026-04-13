import { beforeEach, describe, expect, it, vi } from 'vitest';

const setMock = vi.fn();

vi.mock('../../src/core/appstate', () => ({
  activeTasksSignal: { set: setMock },
}));

vi.mock('../../src/core/di', () => ({
  rootContext: { put: vi.fn() },
}));

describe('taskservice', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it('tracks sync task lifecycle and clears task list', async () => {
    const { TaskService } = await import('../../src/core/taskservice');
    const service = new TaskService();
    service.run('sync', (monitor) => {
      monitor.message = 'working';
      expect(service.getActiveTasks()).toHaveLength(1);
    });
    expect(service.getActiveTasks()).toHaveLength(0);
    expect(setMock).toHaveBeenCalled();
  });

  it('tracks async task lifecycle and notifies on monitor updates', async () => {
    const { TaskService } = await import('../../src/core/taskservice');
    const service = new TaskService();
    await service.runAsync('async', async (monitor) => {
      monitor.currentStep = 1;
      monitor.totalSteps = 2;
    });
    expect(service.getActiveTasks()).toHaveLength(0);
    expect(setMock).toHaveBeenCalled();
  });
});
