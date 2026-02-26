import { rootContext, editorRegistry, File, type EditorInput } from '@kispace-io/core';
import { html } from 'lit';
import { duckdbService } from './duckdb-service';
import './k-duckdb-editor';

export default function () {
  rootContext.put('duckdbService', duckdbService);

  editorRegistry.registerEditorInputHandler({
    canHandle: (input: unknown) =>
      input instanceof File && input.getName().toLowerCase().endsWith('.sql'),
    ranking: 1000,
    handle: async (input: File) => {
      const editorInput: EditorInput = {
        title: input.getName(),
        data: input,
        key: input.getName(),
        editorId: 'duckdb-editor',
        icon: 'database',
        noOverflow: false,
        state: {},
        widgetFactory: () => null as any,
      };
      editorInput.widgetFactory = () =>
        html`<k-duckdb-editor .input=${editorInput}></k-duckdb-editor>`;
      return editorInput;
    },
  });
}
