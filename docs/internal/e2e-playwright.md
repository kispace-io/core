# Playwright E2E

- **Package:** [@eclipse-lyra/app-e2e](../../packages/app-e2e) — Vite shell, [playwright.config.ts](../../packages/app-e2e/playwright.config.ts), and specs under [packages/app-e2e/e2e/](../../packages/app-e2e/e2e/).
- **Run (repo root):** `npm run test:e2e` / `npm run test:e2e:ui` (delegate to the workspace). Or from `packages/app-e2e`: `npm run test:e2e`.
- **Screenshots:** `screenshot: 'on'` in the Playwright config; PNGs under `packages/app-e2e/test-results/` (gitignored via `test-results` / `playwright-report` patterns).
- **Harness:** The app bundles [@eclipse-lyra/extension-ai-system](../../packages/extension-ai-system) plus `e2e-coupled-panel` for [coupled-editors.spec.ts](../../packages/app-e2e/e2e/coupled-editors.spec.ts). Add extensions and `registerApp({ extensions: [...] })` when new specs need them.
- **HTTP preview:** `webServer` sets `E2E_HTTP_PREVIEW=1` so [vite.config.ts](../../packages/app-e2e/vite.config.ts) skips **mkcert** for CI and the readiness URL check.
