import { html } from "lit";
import { EditorInput, editorRegistry, File } from "@kispace-io/core";

import "./k-monaco-widget";

editorRegistry.registerEditorInputHandler({
    lazyInit: async () => {
        await import('./k-monaco-editor');
    },
    canHandle: (input: unknown) =>
        input instanceof File && !input.getName().toLowerCase().endsWith(".py"),
    handle: async (input: File) => {
        const editorInput = {
            title: input.getName(),
            data: input,
            key: input.getName(),
            editorId: "monaco-editor",
            icon: "file-pen",
            noOverflow: false,
            state: {},
        } as EditorInput
        editorInput.widgetFactory = () => html`
            <k-monaco-editor .input=${editorInput}></k-monaco-editor>`
        return editorInput;
    }
})
