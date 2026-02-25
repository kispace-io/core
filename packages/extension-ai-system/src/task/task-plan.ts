import type { TaskPlan, TaskStep } from "../core/types";

export function createTaskPlan(originalPrompt: string, steps: Omit<TaskStep, 'status' | 'revisions'>[]): TaskPlan {
    const now = Date.now();
    return {
        id: `plan-${now}-${Math.random().toString(36).slice(2, 9)}`,
        originalPrompt,
        steps: steps.map(s => ({ ...s, status: 'pending', revisions: 0 })),
        status: 'planning',
        createdAt: now,
        updatedAt: now
    };
}

export function topologicalSort(steps: TaskStep[]): TaskStep[] {
    const visited = new Set<string>();
    const sorted: TaskStep[] = [];
    const byId = new Map(steps.map(s => [s.id, s]));

    function visit(step: TaskStep): void {
        if (visited.has(step.id)) return;
        visited.add(step.id);
        for (const depId of step.dependsOn) {
            const dep = byId.get(depId);
            if (dep) visit(dep);
        }
        sorted.push(step);
    }

    for (const step of steps) {
        visit(step);
    }
    return sorted;
}

export function getNextRunnableSteps(plan: TaskPlan): TaskStep[] {
    const completed = new Set(plan.steps.filter(s => s.status === 'completed').map(s => s.id));
    return plan.steps.filter(s => s.status === 'pending' && s.dependsOn.every(d => completed.has(d)));
}

export function isPlanComplete(plan: TaskPlan): boolean {
    return plan.steps.every(s => s.status === 'completed' || s.status === 'skipped');
}

export function isPlanFailed(plan: TaskPlan): boolean {
    return plan.steps.some(s => s.status === 'failed');
}
