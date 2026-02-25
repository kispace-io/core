import type { StreamChunk, TokenUsage } from "../../core/types";

export abstract class StreamParser {
    protected decoder = new TextDecoder();
    protected usage: TokenUsage | null = null;

    abstract parse(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk>;

    protected abstract processLine(line: string): AsyncGenerator<StreamChunk>;

    protected async *readLines(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk> {
        let buffer = '';
        this.usage = null;

        try {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += this.decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (line.trim()) yield* this.processLine(line);
                }
            }

            if (buffer.trim()) yield* this.processLine(buffer);

            yield this.makeDoneChunk();
        } finally {
            reader.releaseLock();
        }
    }

    protected makeDoneChunk(): StreamChunk {
        const chunk: StreamChunk = { type: 'done', content: '' };
        if (this.usage) chunk.metadata = { usage: this.usage };
        return chunk;
    }
}
