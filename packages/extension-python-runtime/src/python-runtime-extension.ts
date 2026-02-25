import {
    rootContext,
    registerAll,
    commandRegistry,
    workspaceService,
    activeEditorSignal,
    RUN_ACTIVE_SCRIPT_ID,
    toastInfo,
    toastError,
} from "@kispace-io/core";
import type { CommandContribution } from "@kispace-io/core";

type EditorWithLanguage = { isLanguage?(lang: string): boolean };
import { PyEnv } from "./pyservice";
import { getOrCreatePyEnvForEditor, parsePackagesFromContent } from "./editor-python-run";
import { pythonPackageManagerService } from "./package-manager";

export { PyEnv } from "./pyservice";
export { pythonPackageManagerService } from "./package-manager";

const TOOLBAR_MONACO_EDITOR = "toolbar:monaco-editor";

function isPythonEditorActive(): boolean {
    const ed = activeEditorSignal.get() as EditorWithLanguage | undefined;
    return !!ed?.isLanguage?.("python");
}

commandRegistry.registerHandler(RUN_ACTIVE_SCRIPT_ID, {
    ranking: 0,
    canExecute: (ctx) => !!(ctx.activeEditor as EditorWithLanguage)?.isLanguage?.("python"),
    execute: async (ctx) => {
        const ed = ctx.activeEditor;
        if (!ed) {
            toastError("No active editor");
            return;
        }
        const content = (ed as { getContent?: () => string })?.getContent?.()?.trim();
        if (!content) {
            toastError("No content to run");
            return;
        }
        try {
            const env = await getOrCreatePyEnvForEditor(ed);
            const packages = parsePackagesFromContent(content);
            if (packages.length > 0) await env.loadPackages(packages);
            await env.execCode(content);
        } catch (err) {
            toastError(err instanceof Error ? err.message : String(err));
        }
    },
});

registerAll({
    command: {
        id: "python",
        name: "Run Python Script",
        description: "Executes a Python script given its file path",
        parameters: [
            { name: "script", description: "the path to a Python script to run", required: false },
        ],
    },
    handler: {
        execute: async (context: any) => {
            const script: string = context.params?.["script"];
            if (!script) return;
            const pyenv = new PyEnv();
            await pyenv.init(undefined, { params: context.params });
            await pyenv.execScript(script);
        },
    },
});

registerAll({
    command: {
        id: "python.openEditorPackageManager",
        name: "Manage packages",
        description: "Manage Python packages for the editor environment",
        parameters: [],
    },
    handler: {
        canExecute: (ctx) => !!(ctx.activeEditor as EditorWithLanguage)?.isLanguage?.("python"),
        execute: async (ctx) => {
            const ed = ctx.activeEditor as { getContent?: () => string } | undefined;
            if (!ed) {
                toastError("No active editor");
                return;
            }
            const content = ed?.getContent?.() ?? "";
            const packages = parsePackagesFromContent(content);
            try {
                const pyenv = await getOrCreatePyEnvForEditor(ed);
                pythonPackageManagerService.showPackageManager({
                    packages,
                    pyenv,
                });
            } catch (err) {
                toastError(err instanceof Error ? err.message : String(err));
            }
        },
    },
    contribution: {
        target: TOOLBAR_MONACO_EDITOR,
        command: "python.openEditorPackageManager",
        icon: "box",
        label: "Packages",
        disabled: () => !isPythonEditorActive(),
    } as CommandContribution,
});
