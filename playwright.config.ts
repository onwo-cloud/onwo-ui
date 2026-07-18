import { defineConfig } from '@playwright/test';

const chromiumExecutable = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;

if (!chromiumExecutable) {
  console.warn('⚠️ PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH is not set. Make sure you are inside the devenv shell.');
}

const buildTestFor = (...s: string[]) => s.map((s) => [
    `${s}/tests/**/*.spec.ts`,
    `${s}/tests/**/*.e2e.ts`,
    `${s}/e2e/**/*.spec.ts`,
    `${s}/e2e/**/*.e2e.ts`,
]).reduce((a, b) => [...a, ...b], []);

export default defineConfig({
  testDir: '.',
  testMatch: buildTestFor('**'),
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'dev watch',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        viewport: { width: 1280, height: 720 },
        launchOptions: {
          executablePath: chromiumExecutable,
        },
      },
    },
  ],
});
