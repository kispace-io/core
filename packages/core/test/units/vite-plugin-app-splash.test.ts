import { describe, expect, it } from 'vitest';
import type { IndexHtmlTransformContext, Plugin } from 'vite';
import { appSplashPlugin } from '../../src/vite-plugin-app-splash';

const minimalCtx = {
  path: '/index.html',
  filename: 'index.html',
} as IndexHtmlTransformContext;

function runTransform(
  html: string,
  opts?: Parameters<typeof appSplashPlugin>[0],
): string {
  const plugin = appSplashPlugin(opts) as Plugin;
  const tih = plugin.transformIndexHtml;
  if (!tih || typeof tih !== 'object' || !('handler' in tih)) {
    throw new Error('missing transformIndexHtml handler');
  }
  const result = (tih.handler as (h: string, c: IndexHtmlTransformContext) => string)(
    html,
    minimalCtx,
  );
  if (typeof result !== 'string') {
    throw new Error('expected synchronous html string');
  }
  return result;
}

describe('appSplashPlugin', () => {
  const minimal = `<!doctype html><html><head><title>t</title></head><body><div id="app-root"></div></body></html>`;

  it('injects overlay, listeners, and keyframes', () => {
    const out = runTransform(minimal);
    expect(out).toContain('id="app-loading-overlay"');
    expect(out).toContain('app-load-progress');
    expect(out).toContain('@keyframes app-loading-bar');
    expect(out).toContain('/logo-loading.svg');
  });

  it('respects logo src', () => {
    const out = runTransform(minimal, { logo: { src: '/custom.svg' } });
    expect(out).toContain('src="/custom.svg"');
  });

  it('respects logo options', () => {
    const out = runTransform(minimal, {
      logo: { src: '/x.svg', alt: 'Brand', width: 100, height: 40 },
    });
    expect(out).toContain('src="/x.svg"');
    expect(out).toMatch(/<img[^>]*alt="Brand"[^>]*>/);
    expect(out).toContain('width="100"');
    expect(out).toContain('height="40"');
    expect(out).toMatch(/<img[^>]*width="100"[^>]*>/);
  });

  it('injects escaped description', () => {
    const out = runTransform(minimal, {
      description: 'My <app> & more',
    });
    expect(out).toContain('id="app-splash-description"');
    expect(out).toContain('My &lt;app&gt; &amp; more');
    expect(out).not.toContain('<app>');
  });

  it('does nothing when disabled', () => {
    const out = runTransform(minimal, { enabled: false });
    expect(out).toBe(minimal);
  });

  it('skips when overlay already present', () => {
    const withOverlay = minimal.replace(
      '</body>',
      '<div id="app-loading-overlay"></div></body>',
    );
    const out = runTransform(withOverlay);
    expect(out).toBe(withOverlay);
  });
});
