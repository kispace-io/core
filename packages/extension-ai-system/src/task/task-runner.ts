import type { TaskStep, Artifact } from "../core/types";
import type { TaskOptions, TaskResult, AgentContribution } from "../core/interfaces";
import { TaskWorkspace } from "../workspace/workspace";
import { taskCheckpointService } from "./task-checkpoint";
import { getNextRunnableSteps, isPlanComplete, isPlanFailed } from "./task-plan";

export type StepExecutor = (
    step: TaskStep,
    workspace: TaskWorkspace,
    options: TaskOptions
) => Promise<Artifact>;

export class TaskRunner {
    constructor(private executeStep: StepExecutor) {}

    async run(workspace: TaskWorkspace, options: TaskOptions): Promise<TaskResult> {
        const plan = workspace.plan;
        plan.status = 'running';
        await taskCheckpointService.save(workspace);

        const errors = new Map<string, Error>();

        while (true) {
            if (options.signal?.aborted) {
                plan.status = 'paused';
                break;
            }

            const runnableSteps = getNextRunnableSteps(plan);
            if (runnableSteps.length === 0) break;

            await Promise.all(runnableSteps.map(async (step) => {
                workspace.updateStepStatus(step.id, 'running');
                options.onStepStart?.(step);

                try {
                    const artifact = await this.executeStep(step, workspace, options);
                    workspace.updateStepStatus(step.id, 'completed', artifact);
                    options.onStepComplete?.(step, artifact);
                    await taskCheckpointService.save(workspace);
                } catch (error) {
                    const err = error instanceof Error ? error : new Error(String(error));
                    workspace.updateStepStatus(step.id, 'failed');
                    errors.set(step.id, err);
                    options.onStepError?.(step, err);
                }
            }));

            if (isPlanFailed(plan)) {
                plan.status = 'failed';
                break;
            }

            if (isPlanComplete(plan)) {
                plan.status = 'completed';
                break;
            }
        }

        const artifacts = plan.steps
            .filter(s => s.result)
            .map(s => s.result!);

        return { plan, artifacts, errors };
    }
}
