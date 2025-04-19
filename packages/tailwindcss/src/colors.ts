export const baseColors = {
  accent: ['accent'],
  border: ['line'],
  background: ['paper', 'parchment', 'papyrus'],
  text: ['ink', 'lead', 'graphite'],
  absolute: ['forced-a', 'forced-b'],
  utils: ['stare', 'scan', 'gaze'],
  status: ['warn', 'error', 'success'],
} as const;

export type ColorCategory = keyof typeof baseColors;

export type ColorOfCategory<K extends ColorCategory> = (typeof baseColors)[K][number];

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
