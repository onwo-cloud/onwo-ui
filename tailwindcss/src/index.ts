import type { PluginAPI } from 'tailwindcss/plugin';
// eslint-disable-next-line import/no-unresolved
import plugin from 'tailwindcss/plugin';
// eslint-disable-next-line import/no-unresolved
import { colors } from './colors.js';

export default plugin(
  ({ addVariant }: PluginAPI) => {
    // Add custom variants
    for (const state of ['checked', 'selected', 'active', 'disabled']) {
      addVariant(`onwo-${state}`, [`&[aria-${state}="true"]`, `:where([aria-${state}="true"]) &`]);
      addVariant(`onwo-not-${state}`, [
        `&[aria-${state}="false"]`,
        `:where([aria-${state}="false"]) &`,
      ]);
    }

    addVariant(`onwo-open`, [
      `&[aria-open="true"]`,
      `:where([aria-open="true"]) &`,
      `&[data-state="open"]`,
      `:where([data-state="open"]) &`,
    ]);

    addVariant(`onwo-error`, [`&[error]`, `:where([error]) &`]);
    addVariant('not-last', '&:not(:last-child)');
    addVariant('not-first', '&:not(:first-child)');
    addVariant('empty', '&:empty');
  },
  {
    theme: {
      extend: {
        colors,
        backgroundOpacity: {
          12: '0.12',
        },
        screens: {
          '3xl': '1800px',
        },
        fontFamily: {
          grotesk:
            'var(--grotesk), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          averta:
            'var(--averta), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
          'dm-sans':
            'var(--dm-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
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
        animation: {
          loader: 'loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
          rightslide: 'rightslide 0.2s ease-in-out',
          leftslide: 'leftslide 0.2s ease-in-out',
          topslide: 'topslide 0.2s ease-in-out',
          bottomslide: 'bottomslide 0.2s ease-in-out',
          fadeout: 'fadeout 0.5s ease-in-out',
          drawer_enter_right: 'rightslide 0.3s ease-out',
          drawer_enter_left: 'leftslide 0.3s ease-out',
          drawer_enter_top: 'topslide 0.3s ease-out',
          drawer_enter_bottom: 'bottomslide 0.3s ease-out',
          drawer_leave_right: 'rightslideout 0.2s ease-in',
          drawer_leave_left: 'leftslideout 0.2s ease-in',
          drawer_leave_top: 'topslideout 0.2s ease-in',
          drawer_leave_bottom: 'bottomslideout 0.2s ease-in',
          backdrop_enter: 'fadein 0.3s ease-out',
          backdrop_leave: 'fadeout 0.2s ease-in',
          backdrop_leave_swipe: 'fadeout 0.1s ease-in-out',
          modal_enter: 'modalfadein 0.3s ease-out',
          modal_leave: 'modalfadeout 0.2s ease-in',
        },
        keyframes: {
          loader: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          rightslide: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
          leftslide: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
          topslide: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0%)' },
          },
          bottomslide: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0%)' },
          },
          rightslideout: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(100%)' },
          },
          leftslideout: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          topslideout: {
            '0%': { transform: 'translateY(0%)' },
            '100%': { transform: 'translateY(-100%)' },
          },
          bottomslideout: {
            '0%': { transform: 'translateY(0%)' },
            '100%': { transform: 'translateY(100%)' },
          },
          fadein: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          fadeout: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
          },
          modalfadein: {
            '0%': { opacity: 0, transform: 'scale(.95)' },
            '100%': { opacity: 1, transform: 'scale(1)' },
          },
          modalfadeout: {
            '0%': { opacity: 1, transform: 'scale(1)' },
            '100%': { opacity: 0, transform: 'scale(.95)' },
          },
        },
        fontWeight: {
          normal: 400,
          semibold: 500, // that may be confusing
        },
        boxShadow: {
          border: '0 0 0 2px rgba(var(--piccolo)) inset',
          inset: '0 0 0 1px rgb(var(--piccolo)) inset',
          interactive: '0 0 0 2px rgb(var(--piccolo)) inset',
          focus: `0 0 0 4px rgba(var(--piccolo), .13)`,
          input: '0 0 0 var(--border-width) rgb(var(--beerus)) inset',
          'input-hov':
            '0 0 0 var(--border-i-width) rgb(var(--bulma) / 7%) inset, 0 0 0 var(--border-i-width) rgb(var(--beerus)) inset',
          'input-err': '0 0 0 var(--border-i-width) rgb(var(--chichi)) inset',
          'input-focus': '0 0 0 var(--border-i-width) rgb(var(--piccolo)) inset',
          'input-cell-focus': '0 0 0 var(--border-width) rgb(var(--bulma)) inset',
          'onwo-sm': '0 6px 6px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
          'onwo-md': '0 12px 12px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
          'onwo-lg': '0 8px 24px -6px rgba(0, 0, 0, 0.16), 0 0 1px rgba(0, 0, 0, 0.4)',
          'onwo-xl':
            '0 32px 32px -8px rgba(0, 0, 0, 0.08), 0 0 32px -8px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
) as any;
