# Appspace

A modular web framework for building IDE-like applications with a plugin architecture, AI integration, and workspace management.

**Demo app:** [https://app.kispace.de](https://app.kispace.de)

**Docs:** [https://app.kispace.de/docs/](https://app.kispace.de/docs/)

---
## Used by

**geo!space (WebGIS):** [https://geo.kispace.de](https://geo.kispace.de)

---

## Architecture

### Layers

```
┌─────────────────────────────────────────────────────────────┐
│  Applications (packages/app, or custom apps)                 │
│  – AppDefinition: id, extensions, contributions, render     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  App Loader (core)                                          │
│  – App registration & lifecycle  – Extension enable/disable │
│  – Contribution registration     – Render app root         │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐   ┌─────────────────┐   ┌───────────────┐
│  Extensions   │   │  Contributions   │   │   Commands    │
│  Registry     │   │  Registry       │   │   Registry    │
│  (per-app)    │   │  (tabs, toolbars)│   │   (handlers)  │
└───────────────┘   └─────────────────┘   └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  UI (core)                                                   │
│  k-standard-layout · k-tabs · k-toolbar · k-filebrowser · …    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│  Core services                                               │
│  Workspace · Settings · Editor registry · Tasks · Events · DI│
└─────────────────────────────────────────────────────────────┘
```

### Monorepo layout

| Path | Role |
|------|------|
| **`packages/core`** (`@kispace-io/core`) | Platform: registries, services, parts, widgets, dialogs, default UI contributions. No extension logic; extensions are separate packages. |
| **`packages/extension-*`** | One package per extension (e.g. `extension-ai-system`, `extension-settings-tree`, `extension-monaco-editor`). Each depends on core and registers commands/contributions/editors. |
| **`packages/app`** | Default app: imports core + extensions, defines `AppDefinition` and `extensions[]`, registers with app loader. Use as template for your own app. |
| **Root** | Workspace root. Scripts: `dev`, `build`, `build:app`, `test`. |

### Main concepts

- **Apps** — Implement `AppDefinition`: `id`, `name`, `version`, `extensions[]`, optional `contributions`, `render` (string tag, `{ tag, attributes }`, or Lit template), `initialize` / `dispose`.
- **Extensions** — Register with `extensionRegistry`; provide a loader that runs when the extension is enabled. Register commands, contributions, editors, services.
- **Contributions** — Declarative UI: tabs (sidebars, editor area), toolbar buttons, HTML blocks. Targets include `SIDEBAR_MAIN`, `SIDEBAR_AUXILIARY`, `TOOLBAR_MAIN_RIGHT`, `TOOLBAR_BOTTOM_END`, etc.
- **Commands** — Id + handlers (with optional `canExecute`). Toolbar/menus reference commands; AI and command palette can execute them.

---

## How to get started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Run the default app

```bash
git clone https://github.com/kispace-io/appspace.git
cd appspace
npm install
npm run dev
```

This builds core, then starts the default app (Vite dev server). Open the URL shown in the terminal (e.g. `http://localhost:5173`).

### Build for production

```bash
npm run build        # build core only
npm run build:app    # build the default app (depends on core)
```

### Create your own app

1. Use **`packages/app`** as a template: copy it or add a new workspace package.
2. In your app entry (e.g. `main.ts`):
   - Call `applyAppHostConfig({ packageInfo, marketplaceCatalogUrls })` if you use marketplace.
   - Import the extensions you need (`@kispace-io/extension-*`).
   - Call `appLoaderService.registerApp(appDefinition, { autoStart: true })`.
3. **App definition** — Minimal example (no Lit in app):

```ts
import { appLoaderService, type RenderDescriptor } from '@kispace-io/core';

appLoaderService.registerApp({
  id: 'my-app',
  name: 'My App',
  version: '1.0.0',
  extensions: ['@kispace-io/extension-command-palette', '@kispace-io/extension-settings-tree', '@kispace-io/extension-ai-system'],
  render: { tag: 'k-standard-layout', attributes: { 'show-bottom-panel': 'true' } } satisfies RenderDescriptor,
}, { autoStart: true });
```

4. Add the app package to the root `package.json` workspaces and run `npm run dev` from the app package or via root scripts.

---

## Technology stack

- **Lit** — Web components (core and extensions)
- **TypeScript** — Typed API
- **WebAwesome** — UI primitives
- **Monaco** — Code editor (extension)
- **Vite** — Build and dev server

Other extensions add: Pyodide, WebLLM, RxDB, Xenova transformers, etc.

---

## Repository and license

- **Repository:** [github.com/kispace-io/appspace](https://github.com/kispace-io/appspace)
- **License:** EPL-2.0

Publishing of `@kispace-io/core` is done via GitHub Actions on version tags; see workflow and npm trusted publishing in the repo.
