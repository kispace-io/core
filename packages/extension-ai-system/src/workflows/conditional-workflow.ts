import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import { BaseSequentialWorkflow } from "./base-sequential-workflow";
import type { AgentExecutor } from "./workflow-strategy";

export class ConditionalWorkflowStrategy extends BaseSequentialWorkflow {
    async execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: AgentExecutor
    ): Promise<void> {
        const chatConfig = options.chatConfig;
        if (!chatConfig) throw new Error("Chat config is required");

        let currentMessages = [...options.chatContext.history];
        let accumulatedState = { ...results.sharedState };

        for (const contrib of contributions) {
            try {
                const agentContext = this.createAgentContextWithPreviousAgents(accumulatedState, options, results);
                if (contrib.canHandle && !contrib.canHandle(agentContext)) continue;

                const finalMessage = await executeAgent(contrib, currentMessages, accumulatedState, chatConfig, options, results);
                if (!finalMessage) break;

                const updated = this.updateWorkflowState(finalMessage, currentMessages, accumulatedState, agentContext, results);
                currentMessages = updated.currentMessages;
                accumulatedState = updated.accumulatedState;
            } catch (error) {
                const err = error instanceof Error ? error : new Error(String(error));
                results.errors.set(contrib.role, err);
                options.onAgentError?.(contrib.role, err);
            }
        }
    }
}
