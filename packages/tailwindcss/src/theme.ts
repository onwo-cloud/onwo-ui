/* eslint-disable import/no-unresolved */
import type { PluginAPI } from 'tailwindcss/plugin';
import plugin from 'tailwindcss/plugin';
import type { ColorDefinitionFlattened } from './colors.js';
import type { PluginWithOptions } from './index.js';

type OnwoTheme = {
  name: string;
  precision?: number;
  dark?: boolean; // TODO
} & Record<ColorDefinitionFlattened, string>;

// --- CONSTANTS AND HELPERS ---

const abort = (s: string) => {
  throw new Error(`onwo-theme-plugin: ${s}`);
};

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// Added a map to generate a real color scale instead of a single color
const LIGHTNESS_MAP: Record<(typeof SHADES)[number], number> = {
  50: 0.98,
  100: 0.95,
  200: 0.89,
  300: 0.82,
  400: 0.73,
  500: 0.65,
  600: 0.56,
  700: 0.47,
  800: 0.38,
  900: 0.29,
  950: 0.21,
};

const decimalRound = (precision: number) => (s: number) =>
  // eslint-disable-next-line sonarjs/slow-regex
  s.toFixed(precision).replace(/\.?0+$/, '');

// Helper to avoid duplicating logic for parsing options
const getPalettes = (options: OnwoTheme) => {
  const { name, precision = 5, dark: _dark, ...rest } = options;

  const palettes = Object.entries(rest)
    .filter(([key]) => key.startsWith('palette-'))
    // This removes 'palette-' at the start of the variable
    .map(([k, v]) => [k.split('-').slice(1).join('-'), v] as const);

  return { palettes, name, precision };
};

// --- PLUGIN DEFINITION ---

export const onwoThemePlugin: PluginWithOptions<OnwoTheme> = plugin.withOptions<OnwoTheme>(
  // 1. The first argument returns the plugin handler for CSS generation
  (options) => {
    return (api: PluginAPI) => {
      if (!options) return abort('loaded without a theme');
      if (!options.name) return abort('theme requires a `name` property');

      const { palettes, name, precision } = getPalettes(options);
      const round = decimalRound(precision);

      const colorMap = palettes.flatMap(([color, hue]) => {
        const C = 0.29; // A reasonable default chroma
        const H = round(((Number(hue) % 360) + 360) % 360);

        return SHADES.map((shade) => {
          const L = LIGHTNESS_MAP[shade];
          return [`--color-${color}-${shade}`, `oklch(${L} ${C} ${H})`] as const;
        });
      });

      const themeName = `theme-${name}`;
      const colorObj = Object.fromEntries(colorMap);

      // Add utility classes for the theme
      // Note: This is less common. Usually addBase is sufficient.
      api.addUtilities({
        [`.${themeName}`]: colorObj,
      });

      // The standard way to set theme variables
      api.addBase({
        [`:root.${themeName}, .${themeName}`]: colorObj,
      });

      // This function should NOT return anything
    };
  },
  // 2. The second argument returns the configuration object for theme extension
  (options?: OnwoTheme) => {
    if (!options) return abort('loaded without a theme');
    const { palettes } = getPalettes(options);

    // This is where the theme extension happens
    return {
      theme: {
        extend: {
          colors: Object.fromEntries(
            palettes.map(([color]) => [
              color,
              Object.fromEntries(
                SHADES.map((shade) => [String(shade), `var(--color-${color}-${shade})`]),
              ),
            ]),
          ),
        },
      },
    };
  },
);

export default onwoThemePlugin;

//const {
//  name = 'custom-theme',
//  default: _isDefault = false,
//  prefersdark: _p = false,
//  'color-scheme': _colorScheme = 'normal',
//  root: _r = ':root',
//  ..._customThemeTokens
//} = options;
//let selector = `${ root }: has(input.theme - controller[value = ${ name }]: checked), [data - theme="${name}"]`;
//if (isDefault) {
//  selector = `: where(${ root }), ${ selector } `;
//}
// Merge custom theme with built-in theme if it exists
//let themeTokens = { ...customThemeTokens };
//if (allThemes[name]) {
//  const builtinTheme = allThemes[name];
//  themeTokens = {
//    ...builtinTheme,
//    ...customThemeTokens,
//    'color-scheme': colorScheme || builtinTheme.colorScheme,
//  };
//}
//const baseStyles = {
//  [selector]: {
//    'color-scheme': themeTokens['color-scheme'] || colorScheme,
//    ...themeTokens,
//  },
//};
//if (prefersdark) {
//  api.addBase({
//    '@media (prefers-color-scheme: dark)': {
//      [root]: baseStyles[selector], // Use the configurable root option here
//    },
//  });
//}
//api.addBase(baseStyles);
