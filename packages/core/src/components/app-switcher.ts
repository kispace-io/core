import { html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { LyraElement } from "../parts/element";
import { appLoaderService, type AppDefinition } from "../core/apploader";
import { contributionRegistry } from "../core/contributionregistry";
import { CLOSE_BUTTON, DIALOG_CONTRIBUTION_TARGET, dialogService } from "../core/dialogservice";

const APP_SWITCHER_DIALOG_ID = 'app-switcher';

contributionRegistry.registerContribution(DIALOG_CONTRIBUTION_TARGET, {
    id: APP_SWITCHER_DIALOG_ID,
    label: "Switch Application",
    buttons: [CLOSE_BUTTON],
    component: (state?: any) => {
        const apps: AppDefinition[] = state?.apps || [];
        const currentAppName: string | undefined = state?.currentAppName;
        const selectApp = state?.selectApp as (app: AppDefinition) => void;

        return html`
            <wa-scroller orientation="vertical" style="min-width: 300px; max-height: 400px; padding: var(--wa-space-m);">
                <div style="display: flex; flex-direction: column; gap: var(--wa-space-s);">
                    ${apps.map(app => html`
                        <wa-card 
                            style="cursor: pointer;"
                            variant=${app.name === currentAppName ? 'brand' : 'neutral'}
                            @click=${() => selectApp(app)}>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: var(--wa-space-xs);">
                                <span style="font-weight: 600;">${app.name}</span>
                                ${app.version ? html`<wa-badge variant="neutral">v${app.version}</wa-badge>` : ''}
                            </div>
                            ${app.description ? html`<p style="margin: 0; font-size: 0.875rem; line-height: 1.4;">${app.description}</p>` : ''}
                        </wa-card>
                    `)}
                </div>
            </wa-scroller>
        `;
    },
    onButton: async () => true,
});

const showAppSwitcherDialog = async (): Promise<void> => {
    const apps = appLoaderService.getRegisteredApps();
    const currentApp = appLoaderService.getCurrentApp();

    if (apps.length === 0) {
        return;
    }

    const state = {
        apps,
        currentAppName: currentApp?.name,
        selectApp: async (app: AppDefinition) => {
            if (app.name === currentApp?.name) {
                state.close?.();
                return;
            }
            const name = app.name;
            if (!name) return;
            try {
                await appLoaderService.setPreferredAppId(name);
                await appLoaderService.loadApp(name, document.body);
            } catch (error) {
                console.error('Failed to switch app:', error);
            } finally {
                state.close?.();
            }
        },
        close: undefined as (() => void) | undefined,
    };

    await dialogService.open(APP_SWITCHER_DIALOG_ID, state);
};

@customElement('lyra-app-switcher')
export class LyraAppSwitcher extends LyraElement {
    @state()
    private currentApp: AppDefinition | undefined;

    protected doBeforeUI() {
        this.currentApp = appLoaderService.getCurrentApp();
        
        const updateCurrentApp = () => {
            this.currentApp = appLoaderService.getCurrentApp();
            this.requestUpdate();
        };
        
        window.addEventListener('app-loaded', updateCurrentApp);
        
        return () => {
            window.removeEventListener('app-loaded', updateCurrentApp);
        };
    }

    protected render() {
        const apps = appLoaderService.getRegisteredApps();
        const appName = this.currentApp?.name || 'No App';
        
        if (apps.length <= 1) {
            return html``;
        }
        
        return html`
            <wa-button 
                appearance="plain" 
                size="small"
                title="Current app: ${appName}. Click to switch applications."
                @click=${() => showAppSwitcherDialog()}>
                <wa-icon name="grip" style="margin-right: 0.5rem;"></wa-icon>
                ${appName}
            </wa-button>
        `;
    }

    static styles = css`
        :host {
            display: inline-block;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'lyra-app-switcher': LyraAppSwitcher;
    }
}

