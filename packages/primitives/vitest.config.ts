import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['tests/**/*.spec.ts'], // Only include unit specs
    exclude: ['e2e/**/*', 'node_modules/**/*'],
  },
});
