export interface ChatMessage {
    role: string;
    content: string;
    toolCalls?: ToolCall[];
}

export interface ChatHistory {
    history: ChatMessage[];
}

export interface ChatProvider {
    name: string;
    model: string;
    apiKey: string;
    chatApiEndpoint: string;
    parameters?: Record<string, any>;
}

export interface AIConfig {
    defaultProvider?: string;
    providers: ChatProvider[];
    requireToolApproval?: boolean;
    smartToolDetection?: boolean;
}

export interface ApiMessage {
    role: string;
    content: string;
    tool_call_id?: string;
    tool_calls?: ApiToolCall[];
}

export interface ApiToolCall {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string;
    };
    index?: number;
}

export interface ToolDefinition {
    type: "function";
    function: {
        name: string;
        description: string;
        parameters: {
            type: "object";
            properties: Record<string, {
                type: string;
                description: string;
                enum?: string[];
            }>;
            required: string[];
        };
    };
}

export interface ToolCall {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string;
    };
}

export interface ToolResult {
    id: string;
    result: any;
    error?: string;
}

export type StreamChunkType = 'token' | 'metadata' | 'done' | 'error';

export interface StreamChunk {
    type: StreamChunkType;
    content: string;
    message?: Partial<ChatMessage>;
    metadata?: Record<string, any>;
    toolCalls?: ToolCall[];
}

export type WorkflowExecution = 'parallel' | 'sequential' | 'conditional';

export interface TokenUsage {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    estimated?: boolean;
}

export interface ProviderTokenUsage {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
    requestCount: number;
}

// V2 cooperative agent types

export type ArtifactType = 'text' | 'code' | 'json' | 'file-list' | 'plan' | 'review';

export interface Artifact {
    id: string;
    type: ArtifactType;
    content: string;
    structured?: unknown;
    producedBy: string;
    consumedBy?: string[];
    createdAt: number;
}

export type StepStatus = 'pending' | 'running' | 'completed' | 'failed' | 'skipped';

export interface TaskStep {
    id: string;
    role: string;
    subTask: string;
    dependsOn: string[];
    consumes: string[];
    produces: string[];
    status: StepStatus;
    result?: Artifact;
    error?: string;
    revisions: number;
}

export interface TaskPlan {
    id: string;
    originalPrompt: string;
    steps: TaskStep[];
    status: 'planning' | 'running' | 'paused' | 'completed' | 'failed';
    createdAt: number;
    updatedAt: number;
}

export type MessageIntent = 'deliver' | 'request' | 'approve' | 'reject' | 'clarify';

export interface AgentMessage {
    from: string;
    to: string;
    intent: MessageIntent;
    content: string;
    artifact?: Artifact;
    stepId: string;
    timestamp: number;
}
