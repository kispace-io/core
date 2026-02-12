import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const coreDir = path.resolve(__dirname, '../core');

export default defineConfig({
  root: __dirname,
  base: process.env.VITE_BASE_PATH || '/',
  resolve: {
    alias: {
      '@kispace-io/core': path.resolve(coreDir, 'dist/index.js'),
    },
  },
  optimizeDeps: {
    include: ['@kispace-io/core'],
    exclude: [
      '@kispace-io/extension-python-runtime',
      '@kispace-io/extension-ai-system',
      '@kispace-io/extension-rag-system',
      '@kispace-io/extension-notebook',
      '@kispace-io/extension-monaco-editor',
      '@kispace-io/extension-webllm',
      '@kispace-io/extension-webdav',
      '@kispace-io/extension-md-editor',
      '@kispace-io/extension-linuxterminal',
      '@kispace-io/extension-unzip',
      '@kispace-io/extension-certs',
      '@kispace-io/extension-command-palette',
      '@kispace-io/extension-command-shell',
      '@kispace-io/extension-download',
      '@kispace-io/extension-media-viewer',
      '@kispace-io/extension-memory-usage',
      '@kispace-io/extension-settings-tree',
      '@kispace-io/extension-howto-system',
      '@kispace-io/extension-github-service',
      '@kispace-io/extension-in-browser-ml',
    ],
  },
  esbuild: {
    tsconfigRaw: {
      compilerOptions: {
        experimentalDecorators: true,
        useDefineForClassFields: false,
      },
    },
  },
  worker: {
    format: 'es',
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
