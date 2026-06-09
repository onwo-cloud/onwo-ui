import type { PluginAPI } from 'tailwindcss/plugin';
import plugin from 'tailwindcss/plugin';
export * as themes from './themes/index.js';

type OnwoPluginOption = object;

export type PluginWithOptions<T> = {
  (options?: T): any;
  __isOptionsFunction: true;
};

export const onwoPlugin: PluginWithOptions<OnwoPluginOption> = plugin.withOptions<OnwoPluginOption>(
  (_option) => (api: PluginAPI) => {
    api.addBase({
      'html, body': {
        '@apply font-sans': {},
        'text-size-adjust': 'none', // Prevent automatic zooming of fonts on some mobile devices.
        'text-rendering': 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased', // Consistent font display behavior on OSX.
        '-moz-osx-font-smoothing': 'grayscale', // Consistent font display behavior on OSX.
      },
    });
  },
  () => ({
    theme: {
      extend: {
        fontFamily: {
          display:
            'var(--font-display), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          body: 'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          mono: 'var(--font-mono), monospace',
        },
      },
    },
  }),
);

export default onwoPlugin;
