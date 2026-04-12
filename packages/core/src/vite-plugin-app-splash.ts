import type { Logger, Plugin } from 'vite';

export interface SplashLogoOptions {
  /**
   * URL for the splash logo (served from the app `public/` folder by default).
   * @default '/logo-loading.svg'
   */
  src?: string;
  /**
   * Accessible name for the logo. When set, the image is exposed to assistive tech
   * (and `aria-hidden` is not applied).
   */
  alt?: string;
  /**
   * @default 192
   */
  width?: number;
  /**
   * @default 64
   */
  height?: number;
}

export interface AppSplashPluginOptions {
  /**
   * Logo dimensions and accessibility (`src` defaults to `/logo-loading.svg` when omitted).
   */
  logo?: SplashLogoOptions;
  /**
   * Short tagline shown under the logo on the splash screen (static HTML text).
   * The status line under the progress bar still follows `app-load-progress` events.
   */
  description?: string;
  /**
   * When false, the plugin does not modify `index.html`.
   * @default true
   */
  enabled?: boolean;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function resolveLogo(
  options: AppSplashPluginOptions,
): { src: string; alt: string; width: number; height: number } {
  const logo = options.logo ?? {};
  const src = logo.src ?? '/logo-loading.svg';
  const width = logo.width ?? 192;
  const height = logo.height ?? 64;
  const alt = logo.alt ?? '';
  return { src, alt, width, height };
}

function buildSplashFragment(
  logo: { src: string; alt: string; width: number; height: number },
  description: string | undefined,
): string {
  const w = logo.width;
  const h = logo.height;
  const imgAttrs =
    logo.alt.length > 0
      ? `src="${escapeHtml(logo.src)}" alt="${escapeHtml(logo.alt)}" width="${w}" height="${h}" decoding="async" style="display:block;width:${w}px;height:${h}px;max-width:${w}px;max-height:${h}px;min-width:${w}px;min-height:${h}px;flex-shrink:0;"`
      : `src="${escapeHtml(logo.src)}" alt="" width="${w}" height="${h}" decoding="async" style="display:block;width:${w}px;height:${h}px;max-width:${w}px;max-height:${h}px;min-width:${w}px;min-height:${h}px;flex-shrink:0;" aria-hidden="true"`;

  const desc =
    description !== undefined && description.trim().length > 0
      ? `
    <p id="app-splash-description" style="margin:0;font-size:0.875rem;color:var(--wa-text-secondary,#888);text-align:center;max-width:min(360px,90vw);line-height:1.4;">${escapeHtml(description.trim())}</p>`
      : '';

  return `
  <div id="app-loading-overlay" style="position:fixed;inset:0;z-index:1000;background:var(--wa-background,#1a1a1a);pointer-events:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2rem;">
    <img ${imgAttrs}/>
    ${desc}
    <div style="width:240px;height:3px;background:var(--wa-layer-2,#2a2a2a);border-radius:2px;overflow:hidden;">
      <div style="width:40%;height:100%;background:var(--wa-color-primary,#2299dd);border-radius:2px;animation:app-loading-bar 1.5s ease-in-out infinite;" aria-hidden="true"></div>
    </div>
    <div id="app-load-progress" style="font-size:0.8125rem;color:var(--wa-text-secondary,#888);" aria-live="polite">Starting…</div>
  </div>
  <script>
    window.addEventListener('app-load-progress', function(e) {
      var el = document.getElementById('app-load-progress');
      if (el && e.detail && e.detail.message) el.textContent = e.detail.message;
    });
    window.addEventListener('app-loaded', function() {
      var el = document.getElementById('app-loading-overlay');
      if (el) { el.style.opacity = '0'; el.style.transition = 'opacity 0.15s'; setTimeout(function() { el.remove(); }, 160); }
    }, { once: true });
  </script>`;
}

const APP_ROOT_RE =
  /<div\b[^>]*\bid=["']app-root["'][^>]*>\s*<\/div>/i;

const KEYFRAMES_STYLE = `<style>@keyframes app-loading-bar{0%{transform:translateX(0)}50%{transform:translateX(144px)}100%{transform:translateX(0)}}</style>`;

/**
 * Injects the Docks startup splash (overlay, progress line, `app-load-progress` / `app-loaded` listeners)
 * into `index.html` after `#app-root`, and adds the loading-bar keyframes in `<head>` when missing.
 *
 * Downstream apps only need a `<div id="app-root"></div>` and this plugin; branding stays in `public/logo-loading.svg` (or `logo`).
 */
export function appSplashPlugin(options: AppSplashPluginOptions = {}): Plugin {
  const enabled = options.enabled ?? true;
  let logger: Logger | undefined;

  return {
    name: 'eclipse-docks-app-splash',
    configResolved(config) {
      logger = config.logger;
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        if (!enabled) return html;
        if (/id=["']app-loading-overlay["']/.test(html)) return html;

        if (!APP_ROOT_RE.test(html)) {
          logger?.warn(
            '[@eclipse-docks/app-splash] No <div id="app-root"></div> found; splash not injected.',
          );
          return html;
        }

        const logo = resolveLogo(options);
        let out = html;
        if (!out.includes('app-loading-bar')) {
          out = out.replace(/<\/head>/i, `${KEYFRAMES_STYLE}</head>`);
        }
        out = out.replace(APP_ROOT_RE, (m) => `${m}${buildSplashFragment(logo, options.description)}`);
        return out;
      },
    },
  };
}
