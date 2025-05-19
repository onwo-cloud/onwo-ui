export const baseColors = {
  accent: ['accent'],
  text: ['ink', 'lead', 'graphite', 'contrast'],
  bg: ['paper', 'parchment', 'papyrus'],
  border: ['line'],
  hint: ['stare', 'scan', 'gaze'],
  status: ['warn', 'error', 'success'],
} as const;

export type ColorCategory = keyof typeof baseColors;

export type ColorPurpose = 'text' | 'bg' | 'border';

export const colorPurpose: Record<ColorCategory, ColorPurpose[]> = {
  accent: ['bg', 'text'],
  text: ['text'],
  bg: ['bg'],
  border: ['border'],
  hint: ['bg'],
  status: ['bg', 'text'],
};

export type ColorOfCategory<K extends ColorCategory = ColorCategory> =
  (typeof baseColors)[K][number];

export type Prettify<T> = { [K in keyof T]: T[K] } & {};

type DynColor = {
  oklch: { l: string; c: string; h: string };
  hsv: { h: string; s: string; v: string };
  rgb: { r: number; g: number; b: number };
  hex: string;
};

export type OneKeyOfInner<T, K extends keyof T = keyof T> = {
  [P in K]: { [Q in P]: T[P] } & { [Q in Exclude<K, P>]?: never };
}[K];

export type OneKeyOf<T> = OneKeyOfInner<T>;

export type ColorDefinition = Prettify<{
  [K in ColorCategory]: Record<ColorOfCategory<K>, OneKeyOf<DynColor>>;
}>;

export type ColorDefinitionFlattened = {
  [K in ColorCategory]: `color-${K}-${ColorOfCategory<K>}`;
}[ColorCategory];

export const flattenedColors = Object.entries(baseColors).flatMap(([category, colors]) =>
  colors.map((color) => `color-${category}-${color}` as ColorDefinitionFlattened),
);

export const flattenedColorsPLACEHOLDER = Object.entries(baseColors).flatMap(
  ([_, colors]) => colors,
);
