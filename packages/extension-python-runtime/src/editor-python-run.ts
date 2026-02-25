import { workspaceService } from "@kispace-io/core";
import { PyEnv } from "./pyservice";

const pyEnvByEditor = new WeakMap<object, PyEnv>();
const MONACO_EDITOR_TAG = "k-monaco-editor";
let disposePatchApplied = false;

function ensureDisposePatch(): void {
    if (disposePatchApplied) return;
    const EditorClass = customElements.get(MONACO_EDITOR_TAG);
    if (!EditorClass?.prototype) return;
    const proto = EditorClass.prototype as { disconnectedCallback?: () => void };
    const original = proto.disconnectedCallback;
    proto.disconnectedCallback = function (this: object) {
        const env = pyEnvByEditor.get(this);
        if (env) {
            env.close();
            pyEnvByEditor.delete(this);
        }
        original?.call(this);
    };
    disposePatchApplied = true;
}

function isPyEnv(env: unknown): env is PyEnv {
    return !!env && typeof (env as PyEnv).execCode === "function" && typeof (env as PyEnv).close === "function";
}

export async function getOrCreatePyEnvForEditor(editor: object): Promise<PyEnv> {
    ensureDisposePatch();
    const existing = pyEnvByEditor.get(editor);
    if (isPyEnv(existing)) return existing;
    const workspace = await workspaceService.getWorkspace();
    if (!workspace) throw new Error("No workspace selected");
    const env = new PyEnv();
    await env.init(workspace);
    pyEnvByEditor.set(editor, env);
    return env;
}

const MAGIC_COMMENT_REGEX = /^#\s*@gs-packages:\s*(.+)$/i;

export function parsePackagesFromContent(content: string): string[] {
    for (const line of content.split("\n")) {
        const match = line.match(MAGIC_COMMENT_REGEX);
        if (match) {
            return match[1]
                .split(",")
                .map((p) => p.trim())
                .filter((p) => p.length > 0);
        }
    }
    return [];
}
