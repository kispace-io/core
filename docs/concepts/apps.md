# Apps

An **app** is the top-level unit of the framework. You define it with an `AppDefinition` and register it with `appLoaderService`.

## AppDefinition

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique application identifier. |
| `name` | Yes | Human-readable name. |
| `version` | Yes | Semantic version string. |
| `description` | No | Short description. |
| `extensions` | No | List of extension ids to enable when the app loads. |
| `contributions` | No | App-level contributions (UI and/or extensions). |
| `render` | No | Root component: tag string, `{ tag, attributes }`, or a function returning a Lit `TemplateResult`. Defaults to `k-standard-layout`. |
| `initialize` | No | Called after extensions and contributions are registered. |
| `dispose` | No | Called when the app is unloaded. |
| `releaseHistory` | No | Static array or callback for release history (used by version-info). |
| `metadata` | No | Custom metadata (e.g. `metadata.github` for release checking). |

## Registration

```ts
import { appLoaderService } from '@kispace-io/core';

appLoaderService.registerApp(
  {
    id: 'my-app',
    name: 'My App',
    version: '1.0.0',
    extensions: ['system.commandpalette', 'system.settings-tree'],
    render: { tag: 'k-standard-layout', attributes: { 'show-bottom-panel': 'true' } },
  },
  { autoStart: true }
);
```

- **autoStart** — If `true`, the app loader starts after registration (loads extensions and renders).
- **defaultAppId** — App to load when no app is specified (e.g. via URL).
- **container** — DOM element to render into (default: `document.body`).

## App host config

If your app uses the marketplace or needs to expose package info, call `applyAppHostConfig` before registering apps:

```ts
import { applyAppHostConfig } from '@kispace-io/core';
import appPkg from '../package.json';

applyAppHostConfig({
  packageInfo: {
    name: appPkg.name,
    version: appPkg.version,
    dependencies: appPkg.dependencies,
    devDependencies: appPkg.devDependencies,
  },
  marketplaceCatalogUrls: (appPkg as any).marketplace?.catalogUrls,
});
```

See [Build your own app](/guide/build-your-own-app).
