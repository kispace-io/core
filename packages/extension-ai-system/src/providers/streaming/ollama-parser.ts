import { StreamParser } from "./stream-parser";
import type { StreamChunk } from "../../core/types";

export class OllamaParser extends StreamParser {
    async *parse(reader: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<StreamChunk> {
        yield* this.readLines(reader);
    }

    protected async *processLine(line: string): AsyncGenerator<StreamChunk> {
        try {
            const json = JSON.parse(line);
            if (json.error) {
                yield { type: 'error', content: json.error, metadata: json };
                return;
            }
            if (json.done) {
                this.extractUsage(json);
                yield this.makeDoneChunk();
                return;
            }
            const tokenChunk = this.parseToken(json);
            if (tokenChunk) yield tokenChunk;
        } catch {
            // ignore malformed lines
        }
    }

    private extractUsage(json: any): void {
        if (json.prompt_eval_count === undefined && json.eval_count === undefined) return;
        const promptTokens = json.prompt_eval_count || 0;
        const completionTokens = json.eval_count || 0;
        this.usage = { promptTokens, completionTokens, totalTokens: promptTokens + completionTokens, estimated: false };
    }

    private parseToken(json: any): StreamChunk | null {
        if (json.message?.content) {
            return { type: 'token', content: json.message.content, message: { role: json.message.role || 'assistant', content: json.message.content } };
        }
        if (json.response) {
            return { type: 'token', content: json.response, message: { role: 'assistant', content: json.response } };
        }
        return null;
    }
}
