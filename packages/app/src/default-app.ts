import { appLoaderService } from "@kispace-io/core";

appLoaderService.registerApp(
    {
      id: 'dev-standard-app',
      name: 'Default App',
      version: '0.0.0',
      description: 'Default app!space application',
      extensions: [
        '@kispace-io/extension-utils',
        '@kispace-io/extension-command-palette',
        '@kispace-io/extension-command-shell',
        '@kispace-io/extension-md-editor',
        '@kispace-io/extension-monaco-editor',
        '@kispace-io/extension-media-viewer',
        '@kispace-io/extension-settings-tree',
        '@kispace-io/extension-memory-usage',
        '@kispace-io/extension-ai-system',
        '@kispace-io/extension-webmcp',
        '@kispace-io/extension-duckdb',
      ],
    },
    { autoStart: true }
  );