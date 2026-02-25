import type { ChatMessage } from "../core/types";

export interface StreamingMessage {
    message: ChatMessage;
    isStreaming: boolean;
}

export class StreamManager {
    private streamingMessages = new Map<number, StreamingMessage>();
    private currentIndex = -1;
    private rafHandle?: number;
    private pendingUpdate = false;
    private onUpdate?: () => void;

    constructor(onUpdate?: () => void) {
        this.onUpdate = onUpdate;
    }

    createStreamingMessage(role: string): number {
        const index = ++this.currentIndex;
        this.streamingMessages.set(index, { message: { role, content: '' }, isStreaming: true });
        return index;
    }

    updateStreamingMessage(index: number, token: string): void {
        const msg = this.streamingMessages.get(index);
        if (!msg) return;
        msg.message.content += token;
        this.scheduleUpdate();
    }

    completeStreamingMessage(index: number, message: ChatMessage): void {
        const msg = this.streamingMessages.get(index);
        if (!msg) return;
        msg.message = message;
        msg.isStreaming = false;
    }

    removeStreamingMessage(index: number): void {
        this.streamingMessages.delete(index);
    }

    findStreamingMessage(role: string): ChatMessage | undefined {
        return Array.from(this.streamingMessages.values()).find(m => m.message.role === role)?.message;
    }

    getAllStreamingMessages(): StreamingMessage[] {
        return Array.from(this.streamingMessages.values());
    }

    scheduleUpdate(): void {
        if (this.pendingUpdate) return;
        this.pendingUpdate = true;
        this.rafHandle = requestAnimationFrame(() => {
            this.pendingUpdate = false;
            this.onUpdate?.();
        });
    }

    cancelUpdates(): void {
        if (this.rafHandle !== undefined) {
            cancelAnimationFrame(this.rafHandle);
            this.rafHandle = undefined;
            this.pendingUpdate = false;
        }
    }

    reset(): void {
        this.streamingMessages.clear();
        this.cancelUpdates();
        this.currentIndex = -1;
    }
}
