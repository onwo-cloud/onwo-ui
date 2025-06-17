/* eslint-disable import/no-unresolved */
import Color from 'colorjs.io';
import type { PluginAPI } from 'tailwindcss/plugin';
import plugin from 'tailwindcss/plugin';
import type { ColorDefinitionFlattened } from './colors.js';
import { flattenedColors } from './colors.js';
import type { PluginWithOptions } from './index.js';

type OnwoTheme = {
  name: string;
  precision?: number;
  dark?: boolean; // TODO
} & Record<ColorDefinitionFlattened, string>;

const abort = (s: string) => {
  throw `onwo-theme-plugin: ${s}`;
};

const warn = (s: string) => {
  console.warn(`\u001B[33m⚠️ Warning: onwo-theme-plugin: ${s}\u001B[0m`);
};

const convertToOklch = (name: string, value: string) => {
  try {
    return new Color(value).to('oklch');
  } catch {
    warn(`${name} couldnt be parsed \`${value}\``);
    return new Color('rgb(255, 255, 255)').to('oklch');
  }
};

const decimalRound = (precision: number) => (s: number) =>
  // eslint-disable-next-line sonarjs/slow-regex
  s.toFixed(precision).replace(/\.?0+$/, '');

export const onwoThemePlugin: PluginWithOptions<OnwoTheme> = plugin.withOptions<OnwoTheme>(
  (options) => {
    return (api: PluginAPI) => {
      if (!options) return abort('loaded without a theme');
      const { name, precision = 5, dark: _dark, ...baseColors } = options;
      if (!options.name) return abort('theme requires a `name` property');

      // We verify that all colors are present
      const colors: [ColorDefinitionFlattened, string][] = flattenedColors.map((requiredColor) => {
        if (requiredColor in baseColors) {
          return [requiredColor, baseColors[requiredColor]];
        }
        warn(`color '${requiredColor}' is missing in theme`);
        return [requiredColor, 'rgb(255, 255, 255)'];
      });

      const colorMap = Object.fromEntries(
        colors.flatMap(([color, value]) => {
          const colorOklch: Color = convertToOklch(color, value);

          let [L, C, H] = colorOklch.coords;

          if (C < 0.01) {
            C = 0;
            H = 0;
          }
          H = ((H % 360) + 360) % 360;

          // This removes 'color' at the start of the variable
          const colorName = color.split('-').slice(2).join('-'); // TODO

          const round = decimalRound(precision);

          return [
            [`--tw-a--${colorName}`, round(colorOklch.alpha)],
            [`--tw-l--${colorName}`, round(L)],
            [`--tw-c--${colorName}`, round(C)],
            [`--tw-h--${colorName}`, round(H)],
          ];
        }),
      );

      const themeName = `theme-${options.name}`;

      // Add utility classes for the theme
      api.addUtilities({
        [`.${themeName}`]: {
          ...colorMap,
        },
      });

      // placeholder
      api.addBase({
        [`:root.${themeName}, .${themeName}`]: {
          ...colorMap,
        },
      });
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
