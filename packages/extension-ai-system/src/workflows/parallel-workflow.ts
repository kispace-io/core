import type { IWorkflowStrategy, AgentExecutor } from "./workflow-strategy";
import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";

export class ParallelWorkflowStrategy implements IWorkflowStrategy {
    async execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: AgentExecutor
    ): Promise<void> {
        const chatConfig = options.chatConfig;
        if (!chatConfig) throw new Error("Chat config is required");

        await Promise.all(contributions.map(async (contrib) => {
            try {
                await executeAgent(contrib, options.chatContext.history, results.sharedState, chatConfig, options, results);
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                results.errors.set(contrib.role, err);
                options.onAgentError?.(contrib.role, err);
            }
        }));
    }
}
