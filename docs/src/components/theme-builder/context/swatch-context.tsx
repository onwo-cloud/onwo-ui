import { useComputed$ } from '@builder.io/qwik';
import type { Signal } from '@builder.io/qwik';
import { initContext } from '~primitives/utils/context-utils';

import { Obj } from '~/utils/effect';

import type { ScaleData, Theme } from '../types';

/**
 * --- TYPES ---
 */

/** Represents a single node in a cubic bezier spline */
export type PointData = {
  point: [number, number]; // [x, y]
  inHandle: [number, number]; // control point entering the node
  outHandle: [number, number]; // control point leaving the node
};

/** Final calculated color data for a specific scale step */
export type SwatchData = {
  val: number; // e.g., 50, 100, 200...
  lch: [number, number, number]; // raw oklch values
  color: string; // css string: oklch(L C H)
};

export type ComputedThemeSwatches = Record<string, SwatchData[]>;

export interface SwatchContextType {
  swatches: Signal<ComputedThemeSwatches>;
}

/**
 * Cubic Bezier formula.
 * Calculates a single coordinate value at time 't' [0-1] along a segment defined by four points.
 *
 * Formula: B(t) = (1-t)³P0 + 3(1-t)²tP1 + 3(1-t)t²P2 + t³P3
 */
const getBezierValue = (t: number, p0: number, p1: number, p2: number, p3: number): number => {
  const mt = 1 - t;
  return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
};

/**
 * Inverse Interpolation (Root Finding).
 * Since we know the Y coordinate (progress) but need the X coordinate (value),
 * and Cubic Beziers cannot be solved directly for T given Y, we use a binary
 * search to find the parameter 't' that yields our target Y.
 *
 * @param targetValue The Y-coordinate we are searching for.
 * @param p0-p3 The Y-coordinates of the segment's control points.
 * @param iterations Level of precision; 15 iterations is typically sub-pixel accurate.
 */
const findParameterTForValue = (
  targetValue: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number,
  iterations: number,
): number => {
  let lower = 0;
  let upper = 1;
  let t = 0.5;

  for (let i = 0; i < iterations; i++) {
    const guessedValue = getBezierValue(t, p0, p1, p2, p3);
    if (guessedValue > targetValue) {
      upper = t;
    } else {
      lower = t;
    }
    t = (upper + lower) / 2;
  }
  return t;
};

/** Find the two points surrounding the y value. */
const findBoundingSegment = (
  y: number,
  curve: PointData[],
): [startNode: PointData, endNode: PointData] | null => {
  for (let i = 0; i < curve.length - 1; i++) {
    const start = curve[i];
    const end = curve[i + 1];

    if (y >= start.point[1] && y <= end.point[1]) {
      return [start, end];
    }
  }
  return null;
};

/**
 * Resolves the X-axis value for a given Y-axis progress on a multi-node Bezier curve.
 * Used to translate "Scale Step" (Y) into "Color Channel Value" (X).
 */
const getXValueOnCurve = (
  yProgress: number,
  curve: PointData[],
  binarySearchIterations = 15,
): number => {
  if (!curve || curve.length === 0) return 0;
  if (curve.length === 1) return curve[0].point[0];

  // 1. Ensure monotonicity and handle boundary clamping
  const sorted = [...curve].sort((a, b) => a.point[1] - b.point[1]);
  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  if (yProgress <= first.point[1]) return first.point[0];
  if (yProgress >= last.point[1]) return last.point[0];

  // 2. Identify the specific segment the progress falls within
  const segment = findBoundingSegment(yProgress, sorted);
  if (!segment) return last.point[0];

  const [startNode, endNode] = segment;

  // 3. Map control points: P0 (start), P1 (outHandle), P2 (inHandle), P3 (end)
  const cpX = [startNode.point[0], startNode.outHandle[0], endNode.inHandle[0], endNode.point[0]];
  const cpY = [startNode.point[1], startNode.outHandle[1], endNode.inHandle[1], endNode.point[1]];

  const t = findParameterTForValue(
    yProgress,
    cpY[0],
    cpY[1],
    cpY[2],
    cpY[3],
    binarySearchIterations,
  );

  // 5. Calculate the resulting X value at that 't'
  return getBezierValue(t, cpX[0], cpX[1], cpX[2], cpX[3]);
};

/**
 * Maps a single palette scale (e.g., 'primary') into an array of SwatchData.
 */
const generateSwatchesForScale = (
  scale: ScaleData,
  precision: number,
  start: number,
  end: number,
): SwatchData[] => {
  const swatches: SwatchData[] = [];

  // Type-casting the generic ScaleData structure to PointData arrays
  const hueCurve = scale.hue as unknown as PointData[];
  const chromaCurve = scale.chroma as unknown as PointData[];
  const lightCurve = scale.lightness as unknown as PointData[];

  if (!hueCurve || !chromaCurve || !lightCurve) return [];

  for (let val = start; val <= end; val += precision) {
    // Normalize step value (e.g. 50-950) to a 0-1 progress range
    const yProgress = end === start ? 1 : (val - start) / (end - start);

    // Get raw normalized values from curves
    const lightnessValue = getXValueOnCurve(yProgress, lightCurve);
    const chromaValue = getXValueOnCurve(yProgress, chromaCurve);
    const hueValue = getXValueOnCurve(yProgress, hueCurve);

    const l = lightnessValue;

    // this is color space dependant, on HDR you could go higher
    const c = chromaValue * 0.37;
    const h = hueValue * 360;

    swatches.push({
      val,
      lch: [l, c, h],
      color: `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(2)})`,
    });
  }

  return swatches.sort((a, b) => b.val - a.val);
};

export const SwatchContext = initContext<SwatchContextType>('swatch-context');

/** computes color swatches for the entire theme */
export const useSwatchProvider = (
  theme: Signal<Theme>,
  options = { precision: 50, start: 50, end: 950 },
) => {
  const swatches = useComputed$(() => {
    const currentColors = theme.value.palettes;
    const result: ComputedThemeSwatches = {};

    Obj.keys(currentColors).forEach((id) => {
      result[id] = generateSwatchesForScale(
        currentColors[id],
        options.precision,
        options.start,
        options.end,
      );
    });

    return result;
  });

  const contextData: SwatchContextType = { swatches };
  SwatchContext.useProvider(contextData);

  return contextData;
};
