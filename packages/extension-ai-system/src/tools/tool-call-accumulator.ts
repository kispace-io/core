import type { ToolCall, StreamChunk } from "../core/types";

export class ToolCallAccumulator {
    private accumulatedToolCalls = new Map<string, ToolCall>();
    private toolCallIndexMap = new Map<number, string>();

    processChunk(chunk: StreamChunk): void {
        if (chunk.type !== 'token' || !chunk.toolCalls?.length) return;

        for (const toolCall of chunk.toolCalls) {
            const callIndex = (toolCall as any)._index;
            const callId = toolCall.id;

            let existing: ToolCall | undefined;
            let targetId: string;

            if (callIndex !== undefined && this.toolCallIndexMap.has(callIndex)) {
                targetId = this.toolCallIndexMap.get(callIndex)!;
                existing = this.accumulatedToolCalls.get(targetId);
            } else if (callId && this.accumulatedToolCalls.has(callId)) {
                targetId = callId;
                existing = this.accumulatedToolCalls.get(targetId);
            } else {
                targetId = callId || `call_${callIndex !== undefined ? callIndex : Date.now()}_${Math.random()}`;
                existing = undefined;
            }

            if (existing) {
                this.accumulatedToolCalls.set(targetId, {
                    id: targetId,
                    type: toolCall.type || existing.type,
                    function: {
                        name: toolCall.function.name || existing.function.name,
                        arguments: (existing.function.arguments || "") + (toolCall.function.arguments || "")
                    }
                });
                if (callIndex !== undefined && !this.toolCallIndexMap.has(callIndex)) {
                    this.toolCallIndexMap.set(callIndex, targetId);
                }
            } else {
                this.accumulatedToolCalls.set(targetId, { ...toolCall, id: targetId });
                if (callIndex !== undefined) {
                    this.toolCallIndexMap.set(callIndex, targetId);
                }
            }
        }
    }

    getFinalToolCalls(): ToolCall[] {
        return Array.from(this.accumulatedToolCalls.values())
            .filter(tc => tc.function.name?.trim().length > 0)
            .map(tc => ({
                ...tc,
                function: { ...tc.function, arguments: tc.function.arguments?.trim() || "{}" }
            }));
    }

    reset(): void {
        this.accumulatedToolCalls.clear();
        this.toolCallIndexMap.clear();
    }
}
