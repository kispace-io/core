# Packages overview

| Package | Role |
|---------|------|
| **@kispace-io/core** | Platform: registries (extensions, contributions, commands), services (workspace, settings, dialogs, tasks, events), UI parts and widgets. Import this in apps and extensions. |
| **@kispace-io/app** | Default app: defines the app and imports extensions. Use as a template for your own app. |
| **@kispace-io/extension-ai-system** | AI integration (chat, prompts, context). |
| **@kispace-io/extension-command-palette** | Command palette UI. |
| **@kispace-io/extension-settings-tree** | Settings tree UI. |
| **@kispace-io/extension-monaco-editor** | Monaco code editor. |
| **@kispace-io/extension-md-editor** | Markdown editor. |
| **@kispace-io/extension-media-viewer** | Media (image, etc.) viewer. |
| **@kispace-io/extension-notebook** | Notebook runtime and UI. |
| **@kispace-io/extension-python-runtime** | Python runtime (e.g. Pyodide). |
| **@kispace-io/extension-linuxterminal** | Terminal. |
| **@kispace-io/extension-webllm** | Web LLM integration. |
| **@kispace-io/extension-in-browser-ml** | In-browser ML (e.g. transformers). |
| **@kispace-io/extension-rag-system** | RAG (retrieval-augmented generation) and document indexing. |
| **@kispace-io/extension-howto-system** | How-to / tutorial system. |
| **@kispace-io/extension-webdav** | WebDAV workspace and commands. |
| **@kispace-io/extension-download** | Download arbitrary resources from any URL to the workspace. (superseded by `@kispace-io/extension-utils`'s `wget` command) |
| **@kispace-io/extension-unzip** | Unzip support. (superseded by `@kispace-io/extension-utils`) |
| **@kispace-io/extension-memory-usage** | Memory usage display. |
| **@kispace-io/extension-certs** | Certificate handling. (superseded by `@kispace-io/extension-utils`) |
| **@kispace-io/extension-utils** | Convenience utility extension combining wget-style download, unzip, and certificate tools. |
| **@kispace-io/extension-github-service** | GitHub service integration. |

Add only the extensions your app needs to `AppDefinition.extensions` and import their packages so they register with the framework.
