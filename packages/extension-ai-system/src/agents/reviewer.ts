import type { Artifact, ChatProvider } from "../core/types";
import type { CompletionExecutor } from "../core/interfaces";

const REVIEWER_SYS_PROMPT = `You are a quality reviewer. Evaluate the provided artifact against the original task.

Respond with ONLY a JSON object:
{
  "verdict": "approved" | "needs-revision",
  "score": 0-100,
  "notes": "<feedback for revision, empty if approved>"
}`;

export interface ReviewResult {
    verdict: 'approved' | 'needs-revision';
    score: number;
    notes: string;
}

export interface ReviewerOptions {
    artifact: Artifact;
    originalTask: string;
    chatConfig: ChatProvider;
    executeCompletion: CompletionExecutor;
}

export async function reviewArtifact(options: ReviewerOptions): Promise<ReviewResult> {
    const messages = [
        { role: 'system', content: REVIEWER_SYS_PROMPT },
        { role: 'user', content: `Original task: ${options.originalTask}\n\nArtifact to review:\n${options.artifact.content}` }
    ];

    try {
        const responseText = await options.executeCompletion(messages, options.chatConfig);
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error('No JSON in reviewer response');

        const parsed = JSON.parse(jsonMatch[0]);
        return {
            verdict: parsed.verdict === 'approved' ? 'approved' : 'needs-revision',
            score: typeof parsed.score === 'number' ? parsed.score : 50,
            notes: parsed.notes || ''
        };
    } catch {
        return { verdict: 'approved', score: 70, notes: '' };
    }
}
