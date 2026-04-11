# Security and safety

Eclipse Docks runs entirely in the browser. **There is no separate “extension process”** comparable to a browser extension’s isolated world or an OS-level sandbox. Understanding that model helps you ship apps that match your threat model.

**This model is already familiar from desktop IDEs:** Eclipse RCP and similar hosts run plugins in the **same process** as the shell—OSGi gives modular boundaries and class loaders, not a hard security sandbox. Teams choose what to install and trust their update sites; the platform stays integrated and lean. **A browser deployment adds typical web concerns** (origins, HTTPS, untrusted links, rich embedded content), so you still want explicit trust in extensions and catalogs, hardened hosting, and the usual browser hygiene—not because in-process extensions are novel, but because the surrounding threat model differs from a locked-down desktop install.

## Extension trust model

**Extensions execute in the same JavaScript realm as your app** — same origin, same DOM, same `window`, and access to the same core services (workspace, settings, commands, network APIs the browser allows).

- Extensions are **not** moved into dedicated web workers or iframes for isolation. Workers exist for specific features (for example language runtimes or heavy compute), but **extension registration and UI run on the main thread** with full integration into the host. That keeps the platform **lightweight** and avoids duplicating large APIs across process boundaries.
- **App authors must trust every extension** they ship: packages listed in `AppDefinition.extensions`, modules loaded via extension URLs, and anything surfaced through marketplace catalogs you configure.
- Treat third-party extension URLs and catalog hosts like **application dependencies**: prefer pinned versions, first-party or audited sources, and HTTPS. A hostile or compromised extension has the same capabilities as first-party code in your bundle.

## Workspace and user-generated content

The workspace can contain arbitrary files (documents, notebooks, markdown). Some views render rich content (for example markdown as HTML). **Untrusted workspace content should be handled with the same care as in any rich web app** — be cautious when opening workspaces from unknown sources, and prefer extensions or configurations that sanitize or restrict rendering where your use case requires it.

## Settings, credentials, and storage

Settings and workspace metadata typically live in **browser storage** (for example IndexedDB). Anything in that storage is readable by code running on your origin — including extensions. **Do not assume secrets are hidden from extensions**; use short-lived tokens, backend-held secrets, or the platform’s auth patterns appropriate to your deployment.

## Optional features that widen the surface

Some extensions integrate with external services or browser capabilities that deserve an explicit review for your product:

- **External extension registration** — Loading an extension module from a URL runs that code with host privileges. Restrict who can trigger this in your deployment if needed.
- **Marketplace / catalog URLs** — Catalogs list extensions users can install; trust the catalog host and transport (HTTPS).
- **WebMCP and similar bridges** — Features that expose commands or tools to external agents increase the blast radius if an agent is misused. Enable only when it matches your safety requirements.

## Deployment hygiene

- Serve your app over **HTTPS** in production.
- Keep dependencies and extensions **updated**; supply-chain hygiene applies to npm packages and to any URL-loaded modules alike.
- If you embed Docks in a larger product, align **Content-Security-Policy** and related headers with your security team’s baseline (the framework does not replace CSP).

For architecture context, see [Architecture](/concepts/architecture) and [Extensions](/concepts/extensions).
