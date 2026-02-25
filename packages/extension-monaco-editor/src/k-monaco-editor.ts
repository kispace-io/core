import * as monaco from 'monaco-editor';
import styles from "monaco-editor/min/vs/editor/editor.main.css?raw";
import { customElement, property } from "lit/decorators.js";
import { KPart } from "@kispace-io/core";
import { css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { EditorInput, EditorContentProvider } from "@kispace-io/core";

const workerMap: Record<string, string> = {
    'json': new URL('monaco-editor/esm/vs/language/json/json.worker.js', import.meta.url).href,
    'css': new URL('monaco-editor/esm/vs/language/css/css.worker.js', import.meta.url).href,
    'scss': new URL('monaco-editor/esm/vs/language/css/css.worker.js', import.meta.url).href,
    'less': new URL('monaco-editor/esm/vs/language/css/css.worker.js', import.meta.url).href,
    'html': new URL('monaco-editor/esm/vs/language/html/html.worker.js', import.meta.url).href,
    'handlebars': new URL('monaco-editor/esm/vs/language/html/html.worker.js', import.meta.url).href,
    'razor': new URL('monaco-editor/esm/vs/language/html/html.worker.js', import.meta.url).href,
    'typescript': new URL('monaco-editor/esm/vs/language/typescript/ts.worker.js', import.meta.url).href,
    'javascript': new URL('monaco-editor/esm/vs/language/typescript/ts.worker.js', import.meta.url).href,
};

self.MonacoEnvironment = {
    getWorkerUrl(_: any, label: string) {
        return workerMap[label] || new URL('monaco-editor/esm/vs/editor/editor.worker.js', import.meta.url).href;
    }
};

@customElement('k-monaco-editor')
export class KMonacoEditor extends KPart implements EditorContentProvider {
    @property({ attribute: false })
    public input?: EditorInput;
    @property()
    public readOnly: boolean = false;

    private editorRef = createRef();
    private editor?: any;
    private model?: any;

    protected async doInitUI() {
        const file = this.input!.data;
        const textContents = await file.getContents();
        const container = this.editorRef.value as HTMLElement;
        const uri = monaco.Uri.file(file.getName());
        this.model = monaco.editor.createModel(textContents, undefined, uri);
        this.editor = monaco.editor.create(container, {
            theme: 'vs-dark',
            automaticLayout: false,
        });
        this.model.onDidChangeContent((_event: Event) => {
            if (this.readOnly) return;
            this.markDirty(true);
        });
        this.editor.setModel(this.model);
    }

    public getEditor() {
        return this.editor;
    }

    save(): void {
        const value = this.model.getValue();
        this.input?.data.saveContents(value);
        this.markDirty(false);
    }

    protected doClose() {
        this.model?.dispose();
        this.editor?.dispose();
        this.model = undefined;
        this.editor = undefined;
    }

    public getLanguage() {
        return this.model?.getLanguageId()?.toLowerCase() || null;
    }

    public isLanguage(lang: string): boolean {
        return this.getLanguage() === lang.toLowerCase();
    }

    public getContent(): string | null {
        return this.model?.getValue() ?? null;
    }

    public getSelection(): string | null {
        if (!this.editor || !this.model) return null;
        try {
            const selection = this.editor.getSelection();
            if (!selection || selection.isEmpty()) return null;
            return this.model.getValueInRange(selection) || null;
        } catch {
            return null;
        }
    }

    public getSnippet(lines: number = 5): { snippet: string; cursorLine: number } | null {
        if (!this.editor || !this.model) return null;
        try {
            const position = this.editor.getPosition();
            if (!position) return null;
            const n = isNaN(lines) || lines < 0 ? 5 : lines;
            const cursorLineNumber = position.lineNumber;
            const totalLines = this.model.getLineCount();
            const startLine = Math.max(1, cursorLineNumber - n);
            const endLine = Math.min(totalLines, cursorLineNumber + n);
            const snippet = this.model.getValueInRange({
                startLineNumber: startLine,
                startColumn: 1,
                endLineNumber: endLine,
                endColumn: this.model.getLineMaxColumn(endLine),
            });
            return { snippet, cursorLine: cursorLineNumber };
        } catch {
            return null;
        }
    }

    public getFilePath(): string | null {
        return this.input?.data?.getWorkspacePath() || null;
    }

    render() {
        // HINT: adding <style> here is important to avoid style conflicts with Monaco's default styles
        return html`
            <style>${styles}</style>
            <div class="monaco-editor-container" ${ref(this.editorRef)}></div>
        `;
    }

    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 100%;
            height: 100%;
        }
        div.monaco-editor-container {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'k-monaco-editor': KMonacoEditor;
    }
}
