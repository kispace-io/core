import type { ChatProvider } from "../core/types";
import type { ProviderFactory } from "./provider-factory";

export async function streamToText(messages: any[], chatConfig: ChatProvider, providerFactory: ProviderFactory): Promise<string> {
    let content = '';
    const provider = providerFactory.getProvider(chatConfig);
    for await (const chunk of provider.stream({ model: chatConfig.model, messages, chatConfig })) {
        if (chunk.type === 'token') content += chunk.content;
    }
    return content;
}

export function extractBaseUrl(endpoint: string): string | null {
    if (!endpoint) return null;

    if (endpoint.includes('/v1/chat/completions')) {
        return endpoint.replace('/v1/chat/completions', '');
    }
    if (endpoint.includes('/api/v1/chat/completions')) {
        return endpoint.replace('/api/v1/chat/completions', '');
    }
    if (endpoint.includes('/api/chat/completion')) {
        return endpoint.replace('/api/chat/completion', '');
    }

    try {
        const url = new URL(endpoint);
        return `${url.protocol}//${url.host}`;
    } catch {
        return null;
    }
}
