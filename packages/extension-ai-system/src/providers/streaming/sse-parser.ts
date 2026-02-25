import { StreamParser } from "./stream-parser";
import type { StreamChunk, ToolCall } from "../../core/types";

export class SSEParser extends StreamParser {
    async *parse(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk> {
        yield* this.readLines(reader);
    }

    protected async *processLine(line: string): AsyncGenerator<StreamChunk> {
        if (!line.startsWith('data: ')) return;

        const data = line.slice(6).trim();
        if (data === '[DONE]') {
            yield this.makeDoneChunk();
            return;
        }

        try {
            const json = JSON.parse(data);
            if (json.error) {
                yield { type: 'error', content: json.error.message || 'Unknown error', metadata: json.error };
                return;
            }
            this.extractUsage(json);
            const chunk = this.parseChunk(json);
            if (chunk) yield chunk;
        } catch {
            // ignore malformed lines
        }
    }

    private extractUsage(json: any): void {
        if (!json.usage) return;
        const u = json.usage;
        this.usage = {
            promptTokens: u.prompt_tokens || 0,
            completionTokens: u.completion_tokens || 0,
            totalTokens: u.total_tokens || 0,
            estimated: false
        };
    }

    private parseChunk(json: any): StreamChunk | null {
        const delta = json.choices?.[0]?.delta;
        const choice = json.choices?.[0];

        if (delta?.content) {
            return {
                type: 'token',
                content: delta.content,
                message: { role: delta.role || 'assistant', content: choice?.message?.content || delta.content }
            };
        }

        if (choice?.message?.tool_calls) {
            const toolCalls = this.parseToolCalls(choice.message.tool_calls, true);
            if (toolCalls.length > 0) return { type: 'token', content: '', toolCalls };
        } else if (delta?.tool_calls || choice?.delta?.tool_calls) {
            const toolCalls = this.parseToolCalls(delta?.tool_calls || choice?.delta?.tool_calls || [], false);
            if (toolCalls.length > 0) return { type: 'token', content: '', toolCalls };
        }

        return null;
    }

    private parseToolCalls(toolCalls: any[], isComplete: boolean): ToolCall[] {
        return toolCalls
            .filter(tc => tc.function !== undefined)
            .map((tc, idx) => ({
                id: tc.id || `call_${tc.index !== undefined ? tc.index : idx}_${Date.now()}`,
                type: "function" as const,
                function: {
                    name: tc.function?.name || "",
                    arguments: tc.function?.arguments || (isComplete ? "{}" : "")
                },
                _index: tc.index !== undefined ? tc.index : idx
            } as ToolCall & { _index?: number }));
    }
}
