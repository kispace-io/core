import { editorRegistry, File, type EditorInput } from '@eclipse-lyra/core';
import { html } from '@eclipse-lyra/core/externals/lit';
import './sql-editor';

export default function activate() {
  editorRegistry.registerEditorInputHandler({
    editorId: 'system.sqleditor',
    label: 'SQL Editor',
    icon: 'database',
    canHandle: (input: unknown) =>
      input instanceof File && input.getName().toLowerCase().endsWith('.sql'),
    ranking: 900,
    handle: async (input: File) => {
      const editorInput: EditorInput = {
        title: input.getName(),
        data: input,
        key: input.getWorkspacePath(),
        icon: 'database',
        noOverflow: false,
        state: {},
        component: () => null as any,
      };
      editorInput.component = () =>
        html`<lyra-sql-editor .input=${editorInput}></lyra-sql-editor>`;
      return editorInput;
    },
  });
}

