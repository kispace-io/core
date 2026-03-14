# Tabs vs editor registry: responsibility split

**LyraTabs** owns all tab UI and the app-state side effects that follow from it:

- **activePartSignal / activeEditorSignal**: Updated when a tab is shown (wa-tab-show or click in content) or when a tab is closed, so the active part/editor is cleared. Implemented via `syncActiveSignalsFromPanel()` and `clearActiveSignalsIfPartInPanel()`. Only the tab container with `id === EDITOR_AREA_MAIN` sets `activeEditorSignal` (when the part has `isEditor`).
- **Dirty state**: Each LyraTabs instance subscribes to `partDirtySignal` and, when the dirty part is inside one of its panels, calls `markDirty(name, dirty)` so the tab strip shows the dirty indicator. Subscription is cleaned up in `disconnectedCallback`.

**EditorRegistry** is responsible for editor input handling, opening/loading editors, and file icons. It only uses `getEditorArea()` to call `open()` / `activate()` on the editor area when opening or switching to an editor.

Tab-shown and tab-closed custom events are not dispatched; add them in tabs.ts when a listener is needed.
