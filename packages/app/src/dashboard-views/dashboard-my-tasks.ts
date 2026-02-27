import { css, html, LitElement, customElement, state } from "@kispace-io/core/externals/lit";

interface TaskItem {
    id: string;
    title: string;
    done: boolean;
    due?: string;
}

const SAMPLE_TASKS: TaskItem[] = [
    { id: "1", title: "Review pull request #142", done: false, due: "Today" },
    { id: "2", title: "Update documentation", done: true },
    { id: "3", title: "Fix login redirect bug", done: false, due: "Tomorrow" },
    { id: "4", title: "Prepare sprint demo", done: false, due: "Fri" },
    { id: "5", title: "Sync with design team", done: true },
];

@customElement("dashboard-my-tasks")
export class DashboardMyTasks extends LitElement {
    @state() private tasks = [...SAMPLE_TASKS];

    static styles = css`
        :host {
            display: block;
            padding: var(--wa-space-l);
            height: 100%;
            box-sizing: border-box;
        }
        .task-list {
            list-style: none;
            padding: 0;
            margin: 0;
            max-width: 600px;
        }
        .task-item {
            display: flex;
            align-items: center;
            gap: var(--wa-space-m);
            padding: var(--wa-space-m) 0;
            border-bottom: 1px solid var(--wa-color-neutral-border-subtle);
        }
        .task-item:last-child {
            border-bottom: none;
        }
        .task-item.done .task-title {
            text-decoration: line-through;
            color: var(--wa-color-text-quiet);
        }
        .task-title {
            flex: 1;
        }
        .task-due {
            font-size: var(--wa-font-size-s);
            color: var(--wa-color-text-quiet);
        }
    `;

    private toggleTask(id: string) {
        this.tasks = this.tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
    }

    protected render() {
        return html`
            <ul class="task-list">
                ${this.tasks.map(
                    (task) => html`
                        <li class="task-item ${task.done ? "done" : ""}">
                            <wa-checkbox
                                ?checked=${task.done}
                                @change=${() => this.toggleTask(task.id)}
                                aria-label="${task.title}"
                            ></wa-checkbox>
                            <span class="task-title">${task.title}</span>
                            ${task.due ? html`<span class="task-due">${task.due}</span>` : ""}
                        </li>
                    `
                )}
            </ul>
        `;
    }
}
