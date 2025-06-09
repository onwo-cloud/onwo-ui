/* eslint-disable import/no-unresolved */
import type { PluginAPI } from 'tailwindcss/plugin';
import plugin from 'tailwindcss/plugin';
//import type { OnwoTheme } from './themes/index.js';
export * as themes from './themes/index.js';
import type { ColorCategory, ColorOfCategory } from './colors.js';
import { baseColors, colorPurpose } from './colors.js';
import { typography } from './typography/index.js';
import { typedEntries } from './utils.js';

type OnwoPluginOption = object;

export type PluginWithOptions<T> = {
  (options?: T): any;
  __isOptionsFunction: true;
};

export const onwoPlugin: PluginWithOptions<OnwoPluginOption> = plugin.withOptions<OnwoPluginOption>(
  (_option) => (api: PluginAPI) => {
    api.addBase({
      'html, body': {
        '@apply font-body': {},
        'text-size-adjust': 'none', // Prevent automatic zooming of fonts on some mobile devices.
        'text-rendering': 'optimizeLegibility',
        '-webkit-font-smoothing': 'antialiased', // Consistent font display behavior on OSX.
        '-moz-osx-font-smoothing': 'grayscale', // Consistent font display behavior on OSX.
      },
      'h1, h2, h3, h4, h5,h6': {
        '@apply font-display': {},
      },
    });

    // Add custom variants
    for (const state of ['checked', 'selected', 'active', 'disabled']) {
      api.addVariant(`onwo-${state}`, [
        `&[aria-${state}="true"]`,
        `:where([aria-${state}="true"]) &`,
      ]);

      api.addVariant(`onwo-not-${state}`, [
        `&[aria-${state}="false"]`,
        `:where([aria-${state}="false"]) &`,
      ]);
    }

    api.addVariant(`onwo-open`, [
      `&[aria-open="true"]`,
      `:where([aria-open="true"]) &`,
      `&[data-state="open"]`,
      `:where([data-state="open"]) &`,
    ]);

    api.addVariant(`onwo-error`, [`&[error]`, `:where([error]) &`]);
    api.addVariant('not-last', '&:not(:last-child)');
    api.addVariant('not-first', '&:not(:first-child)');
    api.addVariant('empty', '&:empty');

    api.addUtilities(
      Object.fromEntries(
        [
          ['text', 'color'],
          ['bg', 'background-color'],
          ['border', 'border-color'],
          ['ring', '--tw-ring-color'],
        ].map(([key, cssProperty]) => [
          `.onwo-${key}`,
          {
            [cssProperty]: `oklch(clamp(0, calc(var(--tw-current-${key}-l) + var(--tw-l-${key}-offset, 0)), 1) var(--tw-current-${key}-c) var(--tw-current-${key}-h) / var(--tw-current-${key}-a))`,
          },
        ]),
      ),
    );

    const associatedClassUtils = (color: string) => (key: string) => {
      // Generate utility shorthand for colors, e.g. accent-80
      api.matchUtilities(
        {
          // eslint-disable-next-line sonarjs/no-nested-functions
          [`${key}-${color}`]: (value) => ({
            [`@apply ${key}-${color}`]: {},
            [`--tw-l-${key}-offset`]: value,
          }),
        },
        {
          values: Object.fromEntries(
            Array.from({ length: 21 }, (_, i) => [String(i * 10), String((i - 10) / 10)]),
          ),
        },
      );

      api.addUtilities({
        [`.${key}-${color}`]: {
          [`@apply onwo-${key}`]: {},
          [`--tw-current-${key}-l`]: `var(--tw-l--${color})`,
          [`--tw-current-${key}-c`]: `var(--tw-c--${color})`,
          [`--tw-current-${key}-h`]: `var(--tw-h--${color})`,
          [`--tw-current-${key}-a`]: `var(--tw-a--${color})`,
        },
      });
    };

    const parsedEntries: [ColorCategory, ColorOfCategory][] = typedEntries(baseColors).flatMap(
      ([k, v]) => v.map((x) => [k, x]),
    ) as any;

    for (const [purpose, color] of parsedEntries) {
      const purposes = colorPurpose[purpose];
      const addAssociatedClass = associatedClassUtils(color);
      const override = true;

      if (override || purposes.includes('text')) {
        addAssociatedClass('text');
      }

      if (override || purposes.includes('bg')) {
        addAssociatedClass('bg');
      }

      if (override || purposes.includes('border')) {
        addAssociatedClass('border');
        addAssociatedClass('ring');
      }
    }

    //api.matchUtilities(
    //  {
    //    [`text-${color}`]: (value) => ({
    //      '--tw-current-fg-l': `var(--tw-l--${value})`,
    //    }),
    //  },
    //  { values: Array.from({ length: 21}, (_, i) => [i] },
    //);

    // Text color utilities
    //api.matchUtilities(
    //  {
    //    text: (value) => ({
    //      '--tw-current-fg-l': `var(--tw-l--${value})`,
    //    }),
    //  },
    //  { values: api.theme('colors') },
    //);

    // Background color utilities

    //for (let c of flattenedColorsPLACEHOLDER) {
    //}

    typography(api);
  },
  () => ({
    theme: {
      extend: {
        backgroundOpacity: {
          12: '0.12',
        },
        screens: {
          '3xl': '1800px',
        },
        fontFamily: {
          display:
            'var(--font-display), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          body: 'var(--font-body), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          mono: 'var(--font-mono), monospace',
        },
        fontSize: {
          'onwo-9': ['0.5625rem', { lineHeight: '1rem' }],
          'onwo-9-caption': ['0.5625rem', { lineHeight: '1rem', letterSpacing: '0.0625rem' }],
          'onwo-10': ['0.625rem', { lineHeight: '1rem' }],
          'onwo-10-caption': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.0313rem' }],
          'onwo-12': ['0.75rem', { lineHeight: '1rem' }],
          'onwo-14': ['0.875rem', { lineHeight: '1.5rem' }],
          'onwo-16': ['1rem', { lineHeight: '1.5rem' }],
          'onwo-18': ['1.125rem', { lineHeight: '1.5rem' }],
          'onwo-20': ['1.25rem', { lineHeight: '2rem' }],
          'onwo-24': ['1.5rem', { lineHeight: '2rem' }],
          'onwo-32': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.03125rem' }],
          'onwo-40': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.03125rem' }],
          'onwo-48': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.0625rem' }],
          'onwo-56': ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.09375rem' }],
          'onwo-64': ['4rem', { lineHeight: '4.5rem', letterSpacing: '-0.125rem' }],
          'onwo-72': ['4.5rem', { lineHeight: '4.75rem', letterSpacing: '-0.15625rem' }],
        },
        borderRadius: {
          'onwo-i-xs': 'var(--radius-i-xs)',
          'onwo-i-sm': 'var(--radius-i-sm)',
          'onwo-i-md': 'var(--radius-i-md)',
          'onwo-s-xs': 'var(--radius-s-xs)',
          'onwo-s-sm': 'var(--radius-s-sm)',
          'onwo-s-md': 'var(--radius-s-md)',
          'onwo-s-lg': 'var(--radius-s-lg)',
        },
        opacity: {
          disabled: 'var(--opacity--disabled)',
        },
        boxShadow: {
          border: '0 0 0 2px rgba(var(--accent)) inset',
          inset: '0 0 0 1px rgb(var(--accent)) inset',
          flat: '0px -2px 0 0px rgba(128, 128, 163, 0.05) inset',
          interactive: '0 0 0 2px rgb(var(--accent)) inset',
          focus: `0 0 0 2px rgb(var(--stare))`,
          'onwo-sm': '0 6px 6px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
          'onwo-md': '0 12px 12px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
          'onwo-lg': '0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
          'onwo-xl':
            '0 32px 32px -8px rgba(0, 0, 0, 0.08), 0 0 32px -8px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  }),
);

export default onwoPlugin;
