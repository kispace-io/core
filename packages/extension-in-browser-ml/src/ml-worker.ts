/**
 * Web Worker for running transformers.js pipelines off the main thread.
 * Uses @huggingface/transformers (https://github.com/huggingface/transformers.js).
 */

import { pipeline, env } from '@huggingface/transformers';

const pipelines = new Map<string, any>();

function isTensorLike(value: unknown): value is { data: Iterable<number>; dims?: number[] } {
    return value != null && typeof value === 'object' && 'data' in value && typeof (value as any).data !== 'undefined';
}

function serializeForTransfer(value: unknown): unknown {
    if (value == null || typeof value !== 'object') return value;
    if (isTensorLike(value)) return { data: Array.from(value.data), dims: (value as any).dims };
    if (Array.isArray(value)) return value.map(serializeForTransfer);
    const obj = value as Record<string, unknown>;
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(obj)) out[k] = serializeForTransfer(obj[k]);
    return out;
}

function configureEnv(authToken: string | null): void {
    env.allowRemoteModels = true;
    (env as any).allowLocalModels = false;
    (env as any).remoteHost = 'https://huggingface.co';
    if (authToken?.trim()) (env as any).useAuthToken = authToken.trim();
    else (env as any).useAuthToken = null;
}

let authToken: string | null = null;

self.onmessage = async (event: MessageEvent) => {
    const msg = event.data as {
        type: string;
        pipelineKey?: string;
        task?: string;
        model?: string;
        options?: Record<string, unknown>;
        requestId?: number;
        input?: unknown;
        token?: string | null;
    };

    try {
        if (msg.type === 'setAuthToken') {
            authToken = msg.token ?? null;
            configureEnv(authToken);
            return;
        }

        if (msg.type === 'load') {
            const { pipelineKey, task, model, options = {} } = msg;
            if (!pipelineKey || !task || !model) {
                self.postMessage({ type: 'loadResult', pipelineKey, error: 'Missing pipelineKey, task, or model' });
                return;
            }
            configureEnv(authToken);
            const { quantized, ...rest } = options as Record<string, unknown>;
            const pipelineOptions = { dtype: quantized !== undefined && quantized !== null ? quantized : undefined, ...rest };
            const pipe = await pipeline(task as any, model, pipelineOptions as any);
            pipelines.set(pipelineKey, pipe);
            self.postMessage({ type: 'loadResult', pipelineKey });
            return;
        }

        if (msg.type === 'run') {
            const { requestId, pipelineKey, input } = msg;
            const pipe = pipelineKey ? pipelines.get(pipelineKey) : undefined;
            if (!pipe) {
                self.postMessage({ type: 'runResult', requestId, error: `Pipeline not loaded: ${pipelineKey}` });
                return;
            }
            const raw = await pipe(input, msg.options);
            const result = serializeForTransfer(raw);
            self.postMessage({ type: 'runResult', requestId, result });
            return;
        }

        if (msg.type === 'clear') {
            if (msg.pipelineKey) pipelines.delete(msg.pipelineKey);
            return;
        }

        if (msg.type === 'clearAll') {
            pipelines.clear();
            return;
        }
    } catch (err) {
        const errorMsg = err instanceof Error ? err.message : String(err);
        if (msg.type === 'load') {
            self.postMessage({ type: 'loadResult', pipelineKey: msg.pipelineKey, error: errorMsg });
        } else if (msg.type === 'run') {
            self.postMessage({ type: 'runResult', requestId: msg.requestId, error: errorMsg });
        }
    }
};
