import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['test/units/**/*.test.ts'],
    exclude: ['node_modules', 'dist'],
    globals: false,
  },
});
