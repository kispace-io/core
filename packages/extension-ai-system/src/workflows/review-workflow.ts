import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { Artifact } from "../core/types";
import type { IWorkflowStrategy, AgentExecutor } from "./workflow-strategy";
import { reviewArtifact } from "../agents/reviewer";
import { streamToText } from "../providers/provider-utils";
import { ProviderFactory } from "../providers/provider-factory";

/**
 * Review workflow: a producer agent creates an artifact, a reviewer evaluates it,
 * and the producer can revise up to maxRevisions times.
 */
export class ReviewWorkflowStrategy implements IWorkflowStrategy {
    async execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: AgentExecutor
    ): Promise<void> {
        const chatConfig = options.chatConfig;
        if (!chatConfig) throw new Error("Chat config is required");

        const providerFactory = new ProviderFactory();
        const producer = contributions[0];
        const reviewer = contributions.find(c => c.reviewerFor?.includes(producer.role));
        const maxRevisions = producer.maxRevisions ?? 2;

        let currentMessages = [...options.chatContext.history];
        let revisions = 0;

        while (revisions <= maxRevisions) {
            const finalMessage = await executeAgent(producer, currentMessages, results.sharedState, chatConfig, options, results);
            if (!finalMessage) break;

            if (!reviewer) {
                results.messages.set(producer.role, finalMessage);
                break;
            }

            const artifact: Artifact = {
                id: `draft-${revisions}`,
                type: 'text',
                content: finalMessage.content,
                producedBy: producer.role,
                createdAt: Date.now()
            };

            const originalPrompt = options.chatContext.history[options.chatContext.history.length - 1]?.content || '';

            const review = await reviewArtifact({
                artifact,
                originalTask: originalPrompt,
                chatConfig,
                executeCompletion: (messages, cfg) => streamToText(messages, cfg, providerFactory)
            });

            if (review.verdict === 'approved' || revisions >= maxRevisions) {
                results.messages.set(producer.role, finalMessage);
                break;
            }

            // Ask producer to revise
            currentMessages = [
                ...options.chatContext.history,
                finalMessage,
                { role: 'user', content: `Please revise based on this feedback: ${review.notes}` }
            ];
            revisions++;
        }
    }
}
