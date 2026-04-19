import { fileURLToPath } from 'url';
import path from 'path';
import type { PluginOption, UserConfig } from 'vite';
import type { RolldownOptions } from 'rolldown';
import { VitePWA } from 'vite-plugin-pwa';
import type { CustomInjectManifestOptions } from 'vite-plugin-pwa';

/** vite-plugin-pwa still names this `rollup`; Vite 8’s SW build uses Rolldown. */
type VitePwaInjectManifestRollupPlugins = NonNullable<
  NonNullable<CustomInjectManifestOptions['buildPlugins']>['rollup']
>;

/**
 * JSON-serializable options for the SPA `NavigationRoute` (Workbox). Extra keys are kept for
 * forward-compatible SW parsing.
 */
export type DocksPwaNavigationRouteConfig = {
  /**
   * RegExp **sources** for Workbox `denylist` (matched against pathname + search).
   * Pass `[]` so no paths are denied (SPA shell for all navigations within allowlist).
   */
  denylist?: string[];
  /**
   * RegExp **sources** for Workbox `allowlist`. Omit to use Workbox’s default (`[/. /]`).
   * Set when the SPA shell should only apply to a subset of navigations.
   */
  allowlist?: string[];
} & Record<string, unknown>;

/**
 * JSON-serializable bundle injected into the service worker (`define`). Add sections here as
 * the SW gains more build-time tunables; unknown top-level keys are preserved in JSON for
 * forward-compatible workers.
 */
export type DocksPwaServiceWorkerConfig = {
  /** SPA shell fallback: Workbox `NavigationRoute` for `index.html`. */
  navigationRoute?: DocksPwaNavigationRouteConfig;
} & Record<string, unknown>;

function stripUndefinedEntries<T extends Record<string, unknown>>(obj: T): Record<string, unknown> {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined));
}

function resolveServiceWorkerConfig(user?: DocksPwaServiceWorkerConfig): DocksPwaServiceWorkerConfig {
  const u = stripUndefinedEntries((user ?? {}) as Record<string, unknown>);
  const navRaw = u.navigationRoute;
  const rest = Object.fromEntries(Object.entries(u).filter(([k]) => k !== 'navigationRoute'));

  if (navRaw === undefined) {
    return rest as DocksPwaServiceWorkerConfig;
  }
  if (typeof navRaw !== 'object' || navRaw === null || Array.isArray(navRaw)) {
    throw new Error('createDocksPwaPlugin.serviceWorkerConfig.navigationRoute must be a plain object');
  }

  const navigationRoute = stripUndefinedEntries(navRaw as Record<string, unknown>) as DocksPwaNavigationRouteConfig;

  return {
    ...rest,
    navigationRoute,
  } as DocksPwaServiceWorkerConfig;
}

export type CreateDocksPwaPluginOptions = {
  basePath: string;
  appName: string;
  appDescription: string;
  maximumFileSizeToCacheInBytes: number;
  shortName?: string;
  /**
   * Serializable object injected into the SW build. No implicit defaults: set `navigationRoute`
   * (e.g. `denylist`) only when your deployment needs it.
   */
  serviceWorkerConfig?: DocksPwaServiceWorkerConfig;
  /** Extra Vite / Rolldown plugins for the injectManifest service worker build only. */
  injectManifestBuildPlugins?: {
    vite?: UserConfig['plugins'];
    /** Rolldown plugins (Vite 8+). Passed through to vite-plugin-pwa as `buildPlugins.rollup`. */
    rolldown?: RolldownOptions['plugins'];
  };
};

const DEFAULT_GLOB_PATTERNS = ['**/*.{js,css,html,ico,png,svg,webp,woff2,woff,ttf,wasm}'];
const DEFAULT_ASSETS = ['favicon.svg', 'logo.svg', 'logo-loading.svg'];
const pwaSwPath = fileURLToPath(import.meta.resolve('@eclipse-docks/extension-pwa/sw'));
const pwaSwDir = path.dirname(pwaSwPath);
const pwaSwFilename = path.basename(pwaSwPath);

export function createDocksPwaPlugin({
  basePath,
  appName,
  appDescription,
  maximumFileSizeToCacheInBytes,
  shortName = appName,
  serviceWorkerConfig,
  injectManifestBuildPlugins,
}: CreateDocksPwaPluginOptions): PluginOption {
  const resolvedSwConfig = resolveServiceWorkerConfig(serviceWorkerConfig);

  return VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'inline',
    strategies: 'injectManifest',
    srcDir: pwaSwDir,
    filename: pwaSwFilename,
    manifest: {
      name: appName,
      short_name: shortName,
      description: appDescription,
      theme_color: '#1a1a1a',
      background_color: '#1a1a1a',
      display: 'standalone',
      start_url: basePath,
      scope: basePath,
      icons: [
        {
          src: 'logo.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any',
        },
        {
          src: 'favicon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'monochrome',
        },
      ],
    },
    includeAssets: DEFAULT_ASSETS,
    injectManifest: {
      maximumFileSizeToCacheInBytes,
      globPatterns: DEFAULT_GLOB_PATTERNS,
      buildPlugins: {
        vite: [
          {
            name: 'docks-pwa-sw-injected-config',
            config() {
              return {
                define: {
                  __DOCKS_SW_INJECTED_CONFIG__: JSON.stringify(resolvedSwConfig),
                },
              };
            },
          },
          ...(injectManifestBuildPlugins?.vite ?? []),
        ],
        rollup: injectManifestBuildPlugins?.rolldown as VitePwaInjectManifestRollupPlugins,
      },
    },
    devOptions: {
      enabled: false,
    },
  });
}
