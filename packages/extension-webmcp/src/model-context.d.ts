/**
 * Minimal type augmentation for the emerging W3C Web Model Context API (navigator.modelContext).
 * @see https://webmachinelearning.github.io/webmcp/
 */
interface ModelContextToolInputSchema {
  type: "object";
  properties?: Record<string, unknown>;
  required?: string[];
}

interface ModelContextToolResult {
  content: Array<{ type: "text"; text: string }>;
}

interface ModelContext {
  registerTool(tool: {
    name: string;
    description: string;
    inputSchema: ModelContextToolInputSchema;
    execute(args: Record<string, unknown>): Promise<ModelContextToolResult>;
  }): void;
  unregisterTool(name: string): void;
}

interface Navigator {
  modelContext?: ModelContext;
}
