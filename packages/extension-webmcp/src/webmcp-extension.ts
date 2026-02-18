import {
  commandRegistry,
  subscribe,
  unsubscribe,
  TOPIC_COMMAND_REGISTERED,
} from "@kispace-io/core";
import { ToolRegistry, type ToolDefinition } from "@kispace-io/extension-ai-system/api";
import type { Command, ExecutionContext } from "@kispace-io/core";
import type { InputSchema, RegistrationHandle } from "@mcp-b/global";

async function ensureModelContext(): Promise<void> {
  if (typeof navigator === "undefined") return;
  if (navigator.modelContext) return;
  await import("@mcp-b/global");
}

function toolDefToInputSchema(params: ToolDefinition["function"]["parameters"]): InputSchema {
  return {
    type: "object",
    properties: params.properties as InputSchema["properties"],
    required: params.required,
  };
}

function textContent(text: string): { content: Array<{ type: "text"; text: string }> } {
  return { content: [{ type: "text", text }] };
}

function registerCommandAsTool(
  command: Command,
  toolRegistry: ToolRegistry,
  context: ExecutionContext,
  registrations: RegistrationHandle[],
  registeredIds: Set<string>
): void {
  if (registeredIds.has(command.id)) return;
  if (!navigator.modelContext) return;

  const toolDef = toolRegistry.commandToTool(command, context) as ToolDefinition;
  const commandId = command.id;

  const registration = navigator.modelContext.registerTool({
    name: toolDef.function.name,
    description: toolDef.function.description,
    inputSchema: toolDefToInputSchema(toolDef.function.parameters),
    async execute(args: Record<string, unknown>) {
      try {
        const execContext: ExecutionContext = {
          ...context,
          params: args ?? {},
        };
        const result = await commandRegistry.execute(commandId, execContext);
        const text =
          result === undefined || result === null
            ? "Done"
            : typeof result === "object"
              ? JSON.stringify(result)
              : String(result);
        return textContent(text);
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        return textContent(`Error: ${message}`);
      }
    },
  });
  registrations.push(registration);
  registeredIds.add(command.id);
}

export default async (_uiContext: unknown): Promise<void> => {
  await ensureModelContext();
  if (!navigator.modelContext) return;

  const toolRegistry = new ToolRegistry();
  const context: ExecutionContext = commandRegistry.createExecutionContext?.() ?? {};
  const registrations: RegistrationHandle[] = [];
  const registeredIds = new Set<string>();

  const initialCommands = Object.values(commandRegistry.listCommands()) as Command[];
  for (const command of initialCommands) {
    registerCommandAsTool(command, toolRegistry, context, registrations, registeredIds);
  }

  const commandSubscriptionToken = subscribe(TOPIC_COMMAND_REGISTERED, (command: Command) => {
    registerCommandAsTool(command, toolRegistry, context, registrations, registeredIds);
  });

  const cleanup = () => {
    unsubscribe(commandSubscriptionToken);
    registrations.forEach((r) => r.unregister());
  };
  if (typeof window !== "undefined") {
    window.addEventListener("pagehide", cleanup);
  }
};
