import {css, html} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'
import {KElement} from "./k-element";
import {styleMap} from 'lit/directives/style-map.js';
import {
    CommandContribution,
    Contribution,
    ContributionChangeEvent,
    contributionRegistry,
    HTMLContribution,
    TOPIC_CONTRIBUTEIONS_CHANGED
} from "../core/contributionregistry";
import {Signal} from '@lit-labs/signals';
import {unsafeHTML} from "lit/directives/unsafe-html.js";
import {subscribe} from "../core/events";

@customElement('k-toolbar')
export class KToolbar extends KElement {
    @property()
    private position: "start" | "center" | "end" = "start";

    @property({reflect: true})
    orientation: "horizontal" | "vertical" = "horizontal";

    @property({reflect: true})
    align: "start" | "center" | "end" = "start";

    @property({reflect: true})
    size: "small" | "medium" | "large" = "small";

    @property({type: Boolean, attribute: 'is-editor'})
    private isEditor: boolean = false;

    @property({attribute: false})
    public partToolbarContent?: any = undefined;

    @property({attribute: false})
    public partToolbarRenderer?: () => any = undefined;

    @state()
    private contributions: Contribution[] = [];

    protected doBeforeUI() {
        const id = this.getAttribute("id");
        if (id) {
            this.loadContributions(id);
        }
        
        subscribe(TOPIC_CONTRIBUTEIONS_CHANGED, (event: ContributionChangeEvent) => {
            if (!id) return;
            
            const shouldReload = this.matchesTarget(id, event.target);
            if (shouldReload) {
                this.loadContributions(id);
                this.requestUpdate()
            }
        })
    }


    private matchesTarget(id: string, target: string): boolean {
        if (target === id) return true;
        
        if (!id.includes(':')) return false;
        
        const [prefix] = id.split(':');
        if (target === `${prefix}:*`) return true;
        
        const targetParts = target.split(':');
        if (targetParts.length === 2) {
            const categoryToken = targetParts[1];
            if (categoryToken === 'system.editors' || categoryToken === '.system.editors') {
                return this.isEditor && id.startsWith(`${prefix}:`);
            }
        }
        
        return false;
    }

    private loadContributions(id: string) {
        const specific = contributionRegistry.getContributions(id);
        
        if (!id.includes(':')) {
            this.contributions = specific;
            return;
        }
        
        const [prefix] = id.split(':');
        const wildcardId = `${prefix}:*`;
        const wildcard = contributionRegistry.getContributions(wildcardId);
        
        const categoryMatches: Contribution[] = [];
        
        if (this.isEditor) {
            const allCategories = ['system.editors', '.system.editors'];
            for (const category of allCategories) {
                const categoryId = `${prefix}:${category}`;
                const matches = contributionRegistry.getContributions(categoryId);
                categoryMatches.push(...matches);
            }
        }
        
        this.contributions = [...wildcard, ...categoryMatches, ...specific];
    }

    private isToolbarItem(contribution: Contribution): boolean {
        return "command" in contribution || "html" in contribution;
    }

    contributionCreator(contribution: Contribution) {
        if ("command" in contribution) {
            const commandContribution = contribution as CommandContribution
            const showLabel = !!commandContribution.showLabel
            return html`
                <wa-button @click=${() => this.executeCommand(commandContribution.command, commandContribution.params || {})}
                           title=${commandContribution.label}
                           ?disabled="${(commandContribution.disabled as Signal.Computed<boolean>)?.get()}"
                           appearance="plain" size=${this.size}>
                    <wa-icon name=${commandContribution.icon} label="${commandContribution.label}"></wa-icon>
                    ${showLabel ? commandContribution.label : ''}
                </wa-button>
            `
        }
        if ("html" in contribution) {
            const contents = (contribution as HTMLContribution).html
            if (contents instanceof Function) {
                return contents()
            }
            return unsafeHTML(contents)
        }
        return html`<span>unknown contribution type: ${typeof contribution}</span>`
    }

    render() {
        const partContent = this.partToolbarRenderer ? this.partToolbarRenderer() : 
                           (this.partToolbarContent ? this.partToolbarContent : '');
        const flexDir = this.orientation === "vertical" ? "column" : "row";
        const alignMap = { start: "flex-start", center: "center", end: "flex-end" } as const;
        return html`
            <div class="toolbar-items" style=${styleMap({
                "flex-direction": flexDir,
                "align-items": alignMap[this.align],
                "justify-content": this.position
            })}>
                <slot name="start">
                    ${this.contributions.filter(c => c.slot === "start" && this.isToolbarItem(c)).map(this.contributionCreator.bind(this))}
                </slot>
                ${partContent}
                ${this.contributions.filter(c => c.slot === undefined && this.isToolbarItem(c)).map(this.contributionCreator.bind(this))}
                <slot>
                </slot>
                <slot name="end">
                    ${this.contributions.filter(c => c.slot === "end" && this.isToolbarItem(c)).map(this.contributionCreator.bind(this))}
                </slot>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: row;
        }

        :host([orientation="vertical"]) {
            flex-direction: column;
        }

        .toolbar-items {
            display: flex;
            flex: 1;
        }
    `
}

declare global {
    interface HTMLElementTagNameMap {
        'k-toolbar': KToolbar
    }
}
