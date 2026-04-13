import { vi } from 'vitest';

export type RegisteredCommand = {
  command: { id: string };
  handler?: { execute: (context: any) => Promise<unknown> | unknown };
};

export function createCommandHarness() {
  const registerAllMock = vi.fn();
  const toastErrorMock = vi.fn();

  return {
    registerAllMock,
    toastErrorMock,
    getRegistered(commandId: string): RegisteredCommand {
      const call = registerAllMock.mock.calls.find((c) => c[0]?.command?.id === commandId)?.[0];
      if (!call) {
        throw new Error(`Command not registered: ${commandId}`);
      }
      return call as RegisteredCommand;
    },
  };
}
