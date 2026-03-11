import { defineConfig } from 'vite';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const isExternal = (id: string): boolean => {
  // Bundle @electric-sql/pglite into this extension so consumers
  // don't need to depend on it separately.
  if (id === '@electric-sql/pglite' || id.startsWith('@electric-sql/pglite/')) {
    return false;
  }
  return (
    !id.startsWith('./') &&
    !id.startsWith('../') &&
    !(path.isAbsolute(id) && id.includes('/src/'))
  );
};

export default defineConfig({
  plugins: [
    dts({
      outDir: 'dist',
      entryRoot: 'src',
      rollupTypes: false,
      tsconfigPath: path.resolve(__dirname, 'tsconfig.build.json'),
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: isExternal,
      output: {
        format: 'es',
      },
    },
    outDir: 'dist',
    sourcemap: true,
    minify: false,
  },
});

