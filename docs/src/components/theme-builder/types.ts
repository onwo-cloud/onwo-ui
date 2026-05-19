export interface ControlPoint {
  point: [number, number];
  inHandle: [number, number];
  outHandle: [number, number];
}

export interface ScaleData {
  hue: ControlPoint[];
  chroma: ControlPoint[];
  lightness: ControlPoint[];
}

export type SwatchData = {
  color: string;
  val: number;
  lch: [number, number, number];
};

export type ComputedSwatches = Record<string, SwatchData[]>;

export type LazyEval<T> =
 | { kind: 'outdated'; last?: T }
 | { kind: 'ready'; data: T };

export type Palette = ScaleData  & {
  id: number;
  name: string;
  swatches: LazyEval<ComputedSwatches>;
};

export interface Theme {
  id: number;
  name: string;
  palettes: Record<number, Palette>;
}
