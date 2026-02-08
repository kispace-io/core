# @kispace-io/appspace

A highly modular and extensible web application framework for building IDE-like applications with a plugin architecture, AI integration, and comprehensive workspace management.

## Monorepo structure

This repository is a monorepo (npm workspaces):

- **`packages/core`** (`@kispace-io/core`) – Platform: registries, services, parts, widgets, dialogs, API. No extensions; extensions are separate packages.
- **`packages/extension-*`** – One package per extension (e.g. `extension-command-palette`, `extension-ai-system`). Each depends on `@kispace-io/core` and optionally other extension packages.
- **Root** – Workspace root. Run `npm run dev` to start the default app (in `packages/app`), `npm run build:app` to build it, `npm run build` to build the core library, `npm run test` to run core tests.

## Overview

Appspace is a framework that provides a complete foundation for building modern web applications with:

- **Modular Architecture**: Extensible through a plugin system
- **Application Loader**: Dynamic app loading and lifecycle management
- **Contribution System**: Declarative UI and feature contributions
- **Command System**: Context-aware command execution
- **AI Integration**: Built-in AI system with agent support and tool execution
- **Workspace Management**: File system access and workspace handling
- **Extension Marketplace**: Install and manage extensions dynamically

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Layer                         │
│  (Apps built on the framework: geospace, custom apps)      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    App Loader Service                         │
│  - App registration and lifecycle                            │
│  - Extension management                                      │
│  - Contribution registration                                 │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        ▼                   ▼                   ▼
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Extensions   │  │ Contributions│  │  Commands    │
│  Registry    │  │   Registry   │  │   Registry   │
└──────────────┘  └──────────────┘  └──────────────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Core Services Layer                        │
│  - Workspace Service    - Editor Registry                    │
│  - Settings Service     - Task Service                       │
│  - Event System         - Dependency Injection               │
│  - Logger              - Python Service                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    UI Component Layer                         │
│  - Parts (k-part, k-container, k-tabs, k-toolbar)           │
│  - Components (k-filebrowser, k-extensions, etc.)          │
│  - Widgets (k-widget, k-icon, etc.)                         │
│  - Standard App Layout (k-standard-app)                     │
└─────────────────────────────────────────────────────────────┘
```

### Core Concepts

#### 1. Applications

Applications are self-contained units that define their UI, extensions, and contributions. They implement the `AppDefinition` interface:

```typescript
interface AppDefinition {
    id: string;
    name: string;
    version: string;
    description?: string;
    extensions?: string[];           // Required framework extensions
    contributions?: AppContributions; // UI and feature contributions
    initialize?: () => void | Promise<void>;
    render?: () => TemplateResult;   // Custom root component
    dispose?: () => void | Promise<void>;
}
```

**Key Features:**
- Apps can be loaded dynamically from URLs
- Automatic extension lifecycle management
- Declarative contribution registration
- Custom initialization and cleanup

#### 2. Extensions

Extensions are modular plugins that add functionality to the framework. They can:
- Register commands, contributions, and services
- Add UI components and tabs
- Integrate with the AI system
- Provide new capabilities

**Extension Structure:**
```typescript
interface Extension {
    id: string;
    name: string;
    description?: string;
    loader?: () => any;        // Dynamic import function
    url?: string;              // URL to load from
    dependencies?: string[];   // Other extensions required
    experimental?: boolean;
    version?: string;
}
```

**Built-in Extensions:**
- `ai-system`: AI chat interface, agents, and LLM integration
- `rag-system`: Document indexing and semantic search
- `monaco-editor`: Code editor with syntax highlighting
- `notebook`: Interactive notebook support
- `pyterminal`: Python terminal integration
- `git`: Git integration
- `webdav`: WebDAV file system support
- And more...

#### 3. Contributions

Contributions are declarative registrations that add UI elements or features to specific targets:

**Contribution Types:**
- **Tab Contributions**: Add tabs to sidebars or editor areas
- **Command Contributions**: Add buttons/menu items that execute commands
- **Toolbar Contributions**: Add items to toolbars
- **Pane Contributions**: Add resizable panes
- **HTML Contributions**: Add custom HTML content

**Contribution Targets:**
- `SIDEBAR_MAIN`: Main left sidebar
- `SIDEBAR_AUXILIARY`: Right auxiliary sidebar
- `EDITOR_AREA_MAIN`: Main editor area
- `PANEL_BOTTOM`: Bottom panel
- `TOOLBAR_MAIN`: Main toolbar
- And more...

#### 4. Commands

Commands are context-aware actions that can be executed by users or AI agents:

```typescript
interface Command {
    id: string;
    name: string;
    description: string;
    parameters?: Parameter[];
    output?: Variable[];
    keyBinding?: string;
    icon?: string;
}
```

**Command Execution:**
- Commands can have multiple handlers with different priorities
- Handlers can check context (`canExecute`) before execution
- Commands are automatically exposed as AI tools
- Context-aware: different commands available based on active editor, selection, etc.

#### 5. Parts and Components

**Parts** (`KPart`): Base class for tabbed UI components
- Automatic dirty state management
- Toolbar integration
- Command stack support
- Lifecycle management

**Components** (`KElement`, `KContainer`): Base UI elements
- Built on Lit web components
- Reactive state with signals
- WebAwesome UI components

**Standard App Layout** (`KStandardApp`): Default application layout
- Three-column layout (sidebar, editor, auxiliary sidebar)
- Resizable panels
- Toolbar support
- Configurable bottom panels

## Core Services

### Workspace Service
- File system access via File System Access API
- Workspace persistence
- File watching and change detection
- Directory operations

### Settings Service
- Persistent application settings
- Settings tree UI
- Settings change events

### Editor Registry
- File type to editor mapping
- Editor lifecycle management
- Multiple editor instances
- Editor state management

### Task Service
- Background task execution
- Progress monitoring
- Task cancellation
- UI integration

### Event System
- Pub/sub event bus
- Type-safe events
- Framework-wide communication

### Dependency Injection
- Service registration and lookup
- Context-based injection
- Root and scoped contexts

### AI Service
- Multi-provider LLM support (OpenAI, Anthropic, WebLLM, etc.)
- Agent system with custom prompts
- Tool execution for commands
- Streaming responses
- Workflow engine for complex operations

### RAG System (Extension)
- Document indexing and storage
- Vector embeddings (Xenova transformers)
- Semantic search
- AI integration for document retrieval

## Extension System

### Extension Lifecycle

1. **Registration**: Extensions are registered with metadata
2. **Loading**: Extensions are loaded on-demand or at startup
3. **Dependency Resolution**: Dependencies are automatically loaded
4. **Execution**: Extension module's default export function is called
5. **Enablement**: Extensions can be enabled/disabled dynamically

### Creating Extensions

```typescript
// my-extension.ts
export default function(uiContext: UIContext) {
    // Register commands
    commandRegistry.registerCommand(new Command(
        'my.command',
        'My Command',
        'Does something useful'
    ));
    
    // Register command handler
    commandRegistry.registerHandler('my.command', {
        execute: (context) => {
            // Execute command
        }
    });
    
    // Register contributions
    contributionRegistry.registerContribution(SIDEBAR_MAIN, {
        name: 'my-tab',
        label: 'My Tab',
        icon: 'puzzle-piece',
        component: (id) => html`<my-component id="${id}"></my-component>`
    });
}
```

### Extension Marketplace

- Browse and install extensions from remote catalogs
- External extension management
- Extension versioning
- Dependency resolution

## API Structure

The framework exposes a clean public API:

```typescript
// Main API entry point (from core package)
import {
    appLoaderService,
    commandRegistry,
    contributionRegistry,
    extensionRegistry,
    workspaceService,
    editorRegistry,
    createLogger,
} from '@kispace-io/core';

// Base classes
import { KPart, KContainer, KStandardApp } from '@kispace-io/core';

// Extensions (when using extension packages)
import { /* AI system exports */ } from '@kispace-io/extension-ai-system';
import { /* RAG system exports */ } from '@kispace-io/extension-rag-system';
```

## Usage Example

### Creating a Simple App

```typescript
import { appLoaderService, AppDefinition, SIDEBAR_MAIN } from '@kispace-io/core';
import { html } from 'lit';

const myApp: AppDefinition = {
    id: 'my-app',
    name: 'My Application',
    version: '1.0.0',
    extensions: ['system.monaco-editor', 'system.ai-system'],
    contributions: {
        ui: [
            {
                target: SIDEBAR_MAIN,
                name: 'my-tab',
                label: 'My Tab',
                icon: 'folder',
                component: (id) => html`<my-component id="${id}"></my-component>`
            }
        ]
    },
    initialize: async () => {
        // Custom initialization
    }
};

appLoaderService.registerApp(myApp, { autoStart: true });
```

## Technology Stack

- **Lit**: Web components framework
- **TypeScript**: Type safety
- **WebAwesome**: UI component library
- **Monaco Editor**: Code editing
- **RxDB**: Client-side database (for extensions like RAG)
- **Pyodide**: Python runtime in the browser
- **WebLLM**: Local LLM execution
- **Xenova Transformers**: ML models in the browser

## Package exports

The **core** package (`@kispace-io/core`) provides:

- `.` – Main API
- `./api` – Public API services
- `./widgets` – Widget components
- `./parts` – Part components
- `./core/events` – Event system
- `./externals/*` – Re-exports (lit, webawesome, third-party)

Extensions are published as separate packages (e.g. `@kispace-io/extension-ai-system`) and register with the core extension registry at runtime.

## License

EPL-2.0

## Repository

https://github.com/kispace-io/appspace

## Publishing

The **core** package (`@kispace-io/core`) is published to npm when a tagged release is created on GitHub. The root repo is not published; extension packages can be published separately if needed.

### Release Process

#### Using the Release Script (Recommended)

The easiest way to create a release is using the provided script:

```bash
# Patch release (1.2.3 -> 1.2.4)
./scripts/trigger-release.sh patch

# Minor release (1.2.3 -> 1.3.0)
./scripts/trigger-release.sh minor

# Major release (1.2.3 -> 2.0.0)
./scripts/trigger-release.sh major

# Dry run to preview what would happen
./scripts/trigger-release.sh --dry-run patch
```

The script will:
1. Calculate the next version based on the latest tag
2. Show changes since the last release
3. Optionally generate an AI summary (if `OPENAI_API_KEY` is set in `.env`)
4. Create an annotated tag with release notes
5. Push the tag to trigger the CI workflow

#### Manual Release

You can also create a tag manually:

```bash
# Create and push a tag
git tag -a v1.2.3 -m "Release: v1.2.3" -m "Release notes here"
git push origin v1.2.3
```

#### What Happens Next

The GitHub Actions workflow will automatically:
- Extract the version from the tag (e.g., `v1.2.3` → `1.2.3`)
- Update `package.json` with the tag version (CI only, not committed)
- Build the package
- Publish to npm

**Note**: The version in `package.json` should remain at `0.0.0` in the repository. The CI workflow will update it automatically from the tag during the publish process.

### Manual Publishing

If you need to publish manually:

```bash
npm run build
npm publish
```

**Note**: You must be logged in to npm and have publish access to the `@kispace-io` organization.

### Trusted Publishing Setup

This repository uses npm's trusted publishing (OIDC) for automated releases. No `NPM_TOKEN` secret is required.

**Prerequisites:**
- The package must exist in the npm registry (publish manually first if needed)
- The GitHub repository must be **public** (required for provenance)
- You must have publish access to the `@kispace-io` organization on npm

**Setup Steps:**

1. Go to npm organization settings: https://www.npmjs.com/org/kispace-io/settings
2. Navigate to "Automation" → "Trusted Publishing"
3. Click "Add GitHub Actions" or "Configure"
4. Configure the trusted publisher with **exact** values:
   - **Repository Owner**: `kispace-io` (must match GitHub organization)
   - **Repository Name**: `appspace` (must match exactly)
   - **Workflow Filename**: `.github/workflows/publish.yml` (must include the `.yml` extension)
   - **Environment**: (leave empty for default, or specify if using GitHub environments)
5. Save the configuration

**Critical Requirements:**
- Repository must be **public** (private repos don't support provenance)
- All values must match **exactly** (case-sensitive, including `.yml` extension)
- The repository must be in the `kispace-io` GitHub organization
- The workflow file must exist at `.github/workflows/publish.yml`

**Troubleshooting 404 Errors:**

If you see a "404 Not Found" or "401 Unauthorized" error:
1. **Verify trusted publishing is configured**: https://www.npmjs.com/org/kispace-io/settings → Automation → Trusted Publishing
2. **Check exact match**: Repository must be exactly `kispace-io/appspace` (not `erdalkaraca/appspace`)
3. **Verify workflow path**: Must be exactly `.github/workflows/publish.yml` (with `.yml` extension)
4. **Check repository visibility**: Must be **public** (not private)
5. **Verify permissions**: Ensure `id-token: write` is in workflow permissions (already configured)
6. **Test manually**: Try `npm publish --access public` locally to verify npm access

Once configured correctly, the GitHub Actions workflow will automatically authenticate using OIDC when publishing.

