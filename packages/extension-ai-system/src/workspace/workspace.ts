import type { Artifact, ArtifactType, AgentMessage, TaskPlan, TaskStep, StepStatus } from "../core/types";

export class TaskWorkspace {
    private artifacts = new Map<string, Artifact>();
    private mailbox = new Map<string, AgentMessage[]>();

    readonly taskId: string;
    readonly plan: TaskPlan;

    constructor(taskId: string, plan: TaskPlan) {
        this.taskId = taskId;
        this.plan = plan;
    }

    putArtifact(artifact: Artifact): void {
        this.artifacts.set(artifact.id, artifact);
    }

    getArtifact(id: string): Artifact | undefined {
        return this.artifacts.get(id);
    }

    getArtifactsByType(type: ArtifactType): Artifact[] {
        return Array.from(this.artifacts.values()).filter(a => a.type === type);
    }

    getArtifactsProducedBy(role: string): Artifact[] {
        return Array.from(this.artifacts.values()).filter(a => a.producedBy === role);
    }

    postMessage(message: AgentMessage): void {
        const key = message.to === '*' ? '__broadcast__' : message.to;
        const messages = this.mailbox.get(key) || [];
        messages.push(message);
        this.mailbox.set(key, messages);
    }

    readMessages(recipientRole: string): AgentMessage[] {
        const direct = this.mailbox.get(recipientRole) || [];
        const broadcast = this.mailbox.get('__broadcast__') || [];
        return [...direct, ...broadcast];
    }

    clearMessages(recipientRole: string): void {
        this.mailbox.delete(recipientRole);
    }

    updateStepStatus(stepId: string, status: StepStatus, result?: Artifact): void {
        const step = this.plan.steps.find(s => s.id === stepId);
        if (!step) return;
        step.status = status;
        if (result) {
            step.result = result;
            this.putArtifact(result);
        }
        this.plan.updatedAt = Date.now();
    }

    getNextRunnableSteps(): TaskStep[] {
        const completed = new Set(
            this.plan.steps.filter(s => s.status === 'completed').map(s => s.id)
        );
        return this.plan.steps.filter(
            s => s.status === 'pending' && s.dependsOn.every(dep => completed.has(dep))
        );
    }

    toJSON(): object {
        return {
            taskId: this.taskId,
            plan: this.plan,
            artifacts: Array.from(this.artifacts.values()),
            mailbox: Object.fromEntries(this.mailbox.entries())
        };
    }

    static fromJSON(data: any): TaskWorkspace {
        const ws = new TaskWorkspace(data.taskId, data.plan);
        for (const artifact of data.artifacts || []) {
            ws.artifacts.set(artifact.id, artifact);
        }
        for (const [key, messages] of Object.entries(data.mailbox || {})) {
            ws.mailbox.set(key, messages as AgentMessage[]);
        }
        return ws;
    }
}
