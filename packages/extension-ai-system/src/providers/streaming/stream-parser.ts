import type { StreamChunk } from "@kispace-io/core";

export abstract class StreamParser {
    protected decoder = new TextDecoder();
    
    abstract parse(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk>;
    
    protected *processLines(lines: string[]): Generator<string, void> {
        for (const line of lines) {
            if (line.trim() !== '') {
                yield line;
            }
        }
    }
}

