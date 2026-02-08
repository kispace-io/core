# Appspace default app

Template application built on Appspace. Use this package as a starting point for downstream applications.

- **Run dev server**: From repo root, `npm run dev` (or from this directory, `npm run dev`).
- **Build**: From repo root, `npm run build:app` (or from this directory, `npm run build`). Output is in `dist/`.

To create your own app, copy this package, adjust `src/main.ts` (register your app, choose extensions, call `applyAppHostConfig` with your package info), and add your own dependencies as needed.
