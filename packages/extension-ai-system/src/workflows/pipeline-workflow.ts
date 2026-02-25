import type { AgentContribution, AgentWorkflowOptions, AgentWorkflowResult } from "../core/interfaces";
import type { IWorkflowStrategy, AgentExecutor } from "./workflow-strategy";
import { topologicalSort } from "../task/task-plan";

export class PipelineWorkflowStrategy implements IWorkflowStrategy {
    async execute(
        contributions: AgentContribution[],
        options: AgentWorkflowOptions,
        results: AgentWorkflowResult,
        executeAgent: AgentExecutor
    ): Promise<void> {
        const chatConfig = options.chatConfig;
        if (!chatConfig) throw new Error("Chat config is required");

        let currentMessages = [...options.chatContext.history];

        for (const wave of this.buildTopoOrder(contributions)) {
            await Promise.all(wave.map(async (contrib) => {
                try {
                    await executeAgent(contrib, currentMessages, results.sharedState, chatConfig, options, results);
                } catch (error) {
                    const err = error instanceof Error ? error : new Error(String(error));
                    results.errors.set(contrib.role, err);
                    options.onAgentError?.(contrib.role, err);
                }
            }));

            for (const contrib of wave) {
                const msg = results.messages.get(contrib.role);
                if (msg) currentMessages.push(msg);
            }
        }
    }

    private buildTopoOrder(contributions: AgentContribution[]): AgentContribution[][] {
        const waves: AgentContribution[][] = [];
        const placed = new Set<string>();

        while (placed.size < contributions.length) {
            const wave = contributions.filter(c => {
                if (placed.has(c.role)) return false;
                if (!c.consumes?.length) return true;
                const allProduced = contributions
                    .filter(other => placed.has(other.role))
                    .flatMap(other => other.produces || []);
                return c.consumes.every(t => allProduced.includes(t));
            });

            if (wave.length === 0) {
                waves.push(contributions.filter(c => !placed.has(c.role)));
                break;
            }

            waves.push(wave);
            for (const c of wave) placed.add(c.role);
        }

        return waves;
    }
}
