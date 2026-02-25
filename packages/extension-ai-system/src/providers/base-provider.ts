import type { IProvider, StreamingParams } from "../core/interfaces";
import type { StreamChunk, ChatProvider } from "../core/types";
import { SSEParser } from "./streaming/sse-parser";
import { OllamaParser } from "./streaming/ollama-parser";
import { extractBaseUrl } from "./provider-utils";

export abstract class BaseProvider implements IProvider {
    abstract name: string;
    abstract canHandle(chatProvider: ChatProvider): boolean;

    protected createParser(contentType: string, endpoint: string): SSEParser | OllamaParser {
        if (contentType.includes('text/event-stream') || endpoint.includes('openai')) {
            return new SSEParser();
        }
        return new OllamaParser();
    }

    async getAvailableModels(chatProvider: ChatProvider): Promise<Array<{ id: string; name: string }>> {
        if (!chatProvider.chatApiEndpoint) return [];

        const baseUrl = extractBaseUrl(chatProvider.chatApiEndpoint);
        if (!baseUrl) return [];

        try {
            const headers: HeadersInit = { 'Content-Type': 'application/json' };
            if (chatProvider.apiKey) {
                headers['Authorization'] = `Bearer ${chatProvider.apiKey}`;
            }

            const response = await fetch(`${baseUrl}/v1/models`, { method: 'GET', headers });
            if (!response.ok) return [];

            const data = await response.json();
            return (data.data || []).map((m: any) => ({ id: m.id, name: m.name || m.id }));
        } catch {
            return [];
        }
    }

    async *stream(params: StreamingParams): AsyncIterable<StreamChunk> {
        const requestBody: any = {
            model: params.model,
            stream: true,
            messages: params.messages,
            ...params.chatConfig.parameters
        };

        if (params.tools && params.tools.length > 0) {
            requestBody.tools = params.tools;
            requestBody.tool_choice = "auto";
        }

        const response = await fetch(params.chatConfig.chatApiEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${params.chatConfig.apiKey}`,
                "Content-Type": "application/json",
                "Accept": "text/event-stream"
            },
            body: JSON.stringify(requestBody),
            signal: params.signal
        });

        if (!response.ok) {
            const errorText = await response.text().catch(() => 'Unknown error');
            yield { type: 'error', content: `HTTP ${response.status}: ${errorText}`, metadata: { status: response.status } };
            return;
        }

        if (!response.body) {
            yield { type: 'error', content: 'Response body is null or empty', metadata: { status: response.status } };
            return;
        }

        const reader = response.body.getReader();
        if (!reader) {
            yield { type: 'error', content: 'Response body is not readable' };
            return;
        }

        const contentType = response.headers.get('content-type') || '';
        const parser = this.createParser(contentType, params.chatConfig.chatApiEndpoint);

        try {
            for await (const chunk of parser.parse(reader)) {
                yield chunk;
            }
        } catch (error) {
            yield {
                type: 'error',
                content: error instanceof Error ? error.message : 'Failed to parse response stream',
                metadata: { error, contentType }
            };
        }
    }
}
