import type { ChatMessage, ApiMessage } from "./types";

export function sanitizeMessageForAPI(message: ChatMessage | ApiMessage): ApiMessage {
    const apiMessage: ApiMessage = {
        role: message.role,
        content: message.content
    };

    if ('tool_call_id' in message && message.tool_call_id) {
        apiMessage.tool_call_id = message.tool_call_id;
    }

    if ('tool_calls' in message && (message as any).tool_calls) {
        apiMessage.tool_calls = (message as any).tool_calls;
    }

    return apiMessage;
}

export function sanitizeMessagesForAPI(messages: (ChatMessage | ApiMessage)[]): ApiMessage[] {
    return messages.map(sanitizeMessageForAPI);
}
