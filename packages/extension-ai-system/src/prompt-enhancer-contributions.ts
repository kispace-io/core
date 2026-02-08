import { contributionRegistry, workspaceService, editorRegistry, type ExecutionContext } from '@kispace-io/core';
import { CID_PROMPT_ENHANCERS } from './core/constants';
import type { PromptEnhancer, PromptEnhancerContribution } from './core/interfaces';

const appStateEnhancer: PromptEnhancer = {
    enhance: async (prompt: string, _context: ExecutionContext) => {
        try {
            const workspace = await workspaceService.getWorkspace();
            const activeEditor = editorRegistry.getEditorArea()?.getActiveEditor();
            const appState = {
                workspace: workspace?.getName() || null,
                activeEditor: activeEditor ? {
                    title: (activeEditor as any).input?.title || null,
                    editorId: (activeEditor as any).input?.editorId || null
                } : null
            };
            const appStateStr = `***App's state:***\n${JSON.stringify(appState, null, 2)}`;
            return `${prompt}\n\n${appStateStr}`;
        } catch {
            return prompt;
        }
    },
    priority: 20
};

contributionRegistry.registerContribution(CID_PROMPT_ENHANCERS, {
    label: "App State Enhancer",
    enhancer: appStateEnhancer
} as PromptEnhancerContribution);
