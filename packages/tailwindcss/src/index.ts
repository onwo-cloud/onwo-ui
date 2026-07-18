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
    // 1. Add the custom dark mode variant watching `--theme: dark`
    api.addVariant('dark', '@container style(--theme: dark)');

    // 2. Add root CSS variables and base styles
    api.addBase({
      ':root': {
        '--radius-xs': 'calc(var(--theme-rounding-mul, 1) * 0.125rem)',
        '--radius-sm': 'calc(var(--theme-rounding-mul, 1) * 0.25rem)',
        '--radius-md': 'calc(var(--theme-rounding-mul, 1) * 0.375rem)',
        '--radius-lg': 'calc(var(--theme-rounding-mul, 1) * 0.5rem)',
        '--radius-xl': 'calc(var(--theme-rounding-mul, 1) * 0.75rem)',
        '--radius-2xl': 'calc(var(--theme-rounding-mul, 1) * 1rem)',
        '--radius-3xl': 'calc(var(--theme-rounding-mul, 1) * 1.5rem)',
        '--radius-4xl': 'calc(var(--theme-rounding-mul, 1) * 2rem)',
      },
      'html, body': {
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
        borderRadius: {
          xs: 'var(--radius-xs)',
          sm: 'var(--radius-sm)',
          md: 'var(--radius-md)',
          lg: 'var(--radius-lg)',
          xl: 'var(--radius-xl)',
          '2xl': 'var(--radius-2xl)',
          '3xl': 'var(--radius-3xl)',
          '4xl': 'var(--radius-4xl)',
        },
      },
    },
  }),
);

export default onwoPlugin;
