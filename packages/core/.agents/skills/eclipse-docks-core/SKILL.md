---
name: eclipse-docks-core
description: "Eclipse Docks (@eclipse-docks/core): scaffold with npm create @eclipse-docks/app; apps, extensions, layouts, contributions, commands; Lit and Web Awesome only via externals/lit and externals/webawesome. For authors building browser IDE-style apps—not upstream core contributors (use eclipse-docks-contributing)."
---

# Eclipse Docks

> A modular runtime for extensible IDE- and dashboard-style web apps that run entirely in the browser. Use the version of **`@eclipse-docks/core`** pinned in your project’s **`package.json`**.

**Working on github.com/eclipse-docks/core itself?** Prefer the **`eclipse-docks-contributing`** skill from the same package.

Eclipse Docks gives you **`AppDefinition`**, an extension loader, declarative UI **contributions**, and a **command** model so you compose features from npm packages instead of forking the shell.

Applications are plain TypeScript/JavaScript packages: you register an app and a set of extensions; each extension depends on **`@eclipse-docks/core`** and registers commands, editors, sidebar tabs, toolbar actions, and services. UI is built with **Lit** and **Web Awesome** only through **`@eclipse-docks/core/externals/lit`** and **`@eclipse-docks/core/externals/webawesome`** so every extension shares one Lit runtime and one component registration story.

---

## Documentation

For comprehensive documentation, visit [https://docks.eclipse.dev/docs/](https://docks.eclipse.dev/docs/)

- [Getting started](https://docks.eclipse.dev/docs/guide/getting-started): Prerequisites, run the default app from the upstream repo if you cloned it; for a **new** product use **`npm create @eclipse-docks/app my-app`**, **`cd my-app`**, **`npm run dev`**.
- [Build your own app](https://docks.eclipse.dev/docs/guide/build-your-own-app): Monorepo layout, app versus extension packages, customizing the scaffold.
- [Create an extension](https://docks.eclipse.dev/docs/guide/create-an-extension): Anatomy of an extension package and registration.
- [Add a sidebar tab](https://docks.eclipse.dev/docs/guide/add-sidebar-tab): Contributions targeting sidebars / editor areas.
- [Add a command to the toolbar](https://docks.eclipse.dev/docs/guide/add-command-toolbar): Wire a command id to toolbar UI.
- [Architecture](https://docks.eclipse.dev/docs/concepts/architecture): Layers, registries, and how contributions flow into the shell.
- [Apps](https://docks.eclipse.dev/docs/concepts/apps): **`AppDefinition`**, layouts, lifecycle.
- [Extensions](https://docks.eclipse.dev/docs/concepts/extensions): **`extensionRegistry`**, loaders, enable/disable.
- [Contributions](https://docks.eclipse.dev/docs/concepts/contributions): Slots, targets, declarative UI.
- [Commands](https://docks.eclipse.dev/docs/concepts/commands): Command ids, handlers, palette and automation.
- [Security and safety](https://docks.eclipse.dev/docs/concepts/security): Browser-side constraints and safe patterns.
- [Packages overview](https://docks.eclipse.dev/docs/reference/packages): What **`@eclipse-docks/core`** and extension packages are responsible for.
- [Tech stack](https://docks.eclipse.dev/docs/reference/tech-stack): Lit, Vite, and related choices.

---

## Platform concepts

- [App](https://docks.eclipse.dev/docs/concepts/apps): Composition root: metadata, **`extensions[]`**, optional **layout**, app-level contributions, **`initialize`** / **`dispose`**.
- [Layout](https://docks.eclipse.dev/docs/concepts/apps): **`LayoutContribution`** on **`system.layouts`** — **`id`**, **`name`**, Lit **`component`**, optional **`onShow`**; the runtime provides a standard IDE layout; apps may add more.
- [Extension](https://docks.eclipse.dev/docs/concepts/extensions): Separate npm package that registers with **`extensionRegistry`** and runs a loader when enabled; supplies commands, contributions, editors, services.
- [Contribution](https://docks.eclipse.dev/docs/concepts/contributions): Declarative placement of tabs, toolbar items, and blocks into named targets (sidebars, editor stack, toolbars, **`SYSTEM_LAYOUTS`**, etc.).
- [Command](https://docks.eclipse.dev/docs/concepts/commands): Stable **id** plus handler (**`canExecute`** optional); invoked from palette, toolbars, keybindings, or agents by id.

---

## Optional

The following is a **quick reference** for AI-assisted coding. Prefer the linked documentation above for narratives and examples.

#### `npm create @eclipse-docks/app`

**Description:** Official scaffolder (**`@eclipse-docks/create-app`**) that generates a workspace with **`packages/app`**, **`packages/example-extension`** (name may vary slightly by template version), and ready-made npm scripts—**recommended** starting point instead of wiring **`@eclipse-docks/core`** into an empty SPA by hand.

**Documentation:** [Build your own app](https://docks.eclipse.dev/docs/guide/build-your-own-app)

**Typical workflow:**

```bash
npm create @eclipse-docks/app my-app
cd my-app
npm run dev
```

#### `@eclipse-docks/core` (public entry)

**Description:** Published package **`@eclipse-docks/core`**. Root import exports services, types, **`DocksPart`**-style primitives, **`AppDefinition`**, logger helpers, constants, etc. Importing **`@eclipse-docks/core`** initializes the runtime.

**Documentation:** [Packages overview](https://docks.eclipse.dev/docs/reference/packages), [Architecture](https://docks.eclipse.dev/docs/concepts/architecture)

**Exports (non-exhaustive):** Prefer anything re-exported from **`@eclipse-docks/core`**. Specialized subpaths include **`@eclipse-docks/core/externals/lit`**, **`@eclipse-docks/core/externals/webawesome`**, **`@eclipse-docks/core/parts`** / **`widgets`** for shell building blocks where documented.

#### `AppDefinition`

**Description:** Registers one application: **`name`**, **`version`**, **`extensions`** (contributions to the extension system), **`layout`** (string id or **`{ id, props }`**), **`contributions`**, **`initialize`**, **`dispose`**.

**Documentation:** [Apps](https://docks.eclipse.dev/docs/concepts/apps)

#### Extension package

**Description:** Declares a dependency on **`@eclipse-docks/core`**, calls **`extensionRegistry`** (or equivalent registration API your template uses) with a loader that runs when the extension is enabled; registers commands, contributions, editor factories, and optional services.

**Documentation:** [Extensions](https://docks.eclipse.dev/docs/concepts/extensions), [Create an extension](https://docks.eclipse.dev/docs/guide/create-an-extension)

#### Lit and Web Awesome (author code)

**Description:** Use **only** the re-exports so all packages resolve the same Lit and the same Web Awesome registration.

**Imports:**

- **Lit:** `import { html, css, … } from '@eclipse-docks/core/externals/lit'` — not **`import … from 'lit'`** for normal extension/app UI.
- **Web Awesome:** `import '@eclipse-docks/core/externals/webawesome'` where you need registered **`<wa-*>`** elements and docks icon behavior — not a direct **`@awesome.me/webawesome`** dependency for routine UI.

**Documentation:** [Tech stack](https://docks.eclipse.dev/docs/reference/tech-stack), [Web Awesome — Using with AI](https://webawesome.com/docs/ai) (general WA context; still use Docks **externals** paths in Docks apps).

**If something is missing from the re-exports:** Treat as an upstream **`@eclipse-docks/core`** gap—check **[docks.eclipse.dev/docs](https://docks.eclipse.dev/docs/)** or the project issue tracker before bypassing those imports; avoid permanently forked Lit/Web Awesome dependencies unless you knowingly accept duplication and breakage risk.

#### Pitfalls (for AI assistants)

- Greenfield app with only **`@eclipse-docks/core`** and no scaffold—use **`npm create @eclipse-docks/app`** first.
- **`import … from 'lit'`** / **`@awesome.me/webawesome`** in app or extension code when **`externals/lit`** and **`externals/webawesome`** are sufficient.
- Inventing types or services not exported from **`@eclipse-docks/core`** (or its documented subpaths).
