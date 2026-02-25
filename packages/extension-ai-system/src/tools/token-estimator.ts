import type { ApiMessage, ToolDefinition, ToolCall } from "../core/types";

export class TokenEstimator {
    private static readonly AVERAGE_CHARS_PER_TOKEN = 4;
    private static readonly TOOL_DEFINITION_OVERHEAD = 50;
    private static readonly TOOL_CALL_OVERHEAD = 10;
    private static readonly MESSAGE_OVERHEAD = 4;

    static estimateTokens(text: string): number {
        if (!text?.trim()) return 0;
        const trimmed = text.trim();
        return Math.max(1, Math.ceil(trimmed.length / this.AVERAGE_CHARS_PER_TOKEN + trimmed.split(/\s+/).filter(w => w.length > 0).length * 0.3));
    }

    static estimateMessageTokens(message: ApiMessage): number {
        let tokens = this.MESSAGE_OVERHEAD;
        if (message.content) tokens += this.estimateTokens(message.content);
        if (message.role) tokens += this.estimateTokens(message.role);
        if (message.tool_calls) {
            for (const tc of message.tool_calls) {
                tokens += this.estimateTokens(tc.function.name || '') + this.estimateTokens(tc.function.arguments || '{}') + this.TOOL_CALL_OVERHEAD;
            }
        }
        if (message.tool_call_id) tokens += this.estimateTokens(message.tool_call_id);
        return tokens;
    }

    static estimatePromptTokens(messages: ApiMessage[], tools?: ToolDefinition[]): number {
        let total = messages.reduce((sum, m) => sum + this.estimateMessageTokens(m), 0);
        if (tools?.length) {
            for (const tool of tools) {
                total += this.TOOL_DEFINITION_OVERHEAD;
                total += this.estimateTokens(tool.function.name || '');
                total += this.estimateTokens(tool.function.description || '');
                if (tool.function.parameters) total += this.estimateTokens(JSON.stringify(tool.function.parameters));
            }
        }
        return total;
    }

    static estimateCompletionTokens(content: string, toolCalls?: ToolCall[]): number {
        let tokens = this.estimateTokens(content);
        if (toolCalls?.length) {
            for (const tc of toolCalls) {
                tokens += this.TOOL_CALL_OVERHEAD + this.estimateTokens(tc.function?.name || '') + this.estimateTokens(tc.function?.arguments || '{}');
            }
        }
        return tokens;
    }
}
