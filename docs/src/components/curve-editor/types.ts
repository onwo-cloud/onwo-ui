// The raw data for a color swatch
export type SwatchData = {
  color: string;
  val: number;
  lch: [number, number, number];
};

export type WithId<T extends Record<string, any>> = T & { id: string };

export type ControlPoint = {
  point: [number, number];
  inHandle: [number, number];
  outHandle: [number, number];
};
