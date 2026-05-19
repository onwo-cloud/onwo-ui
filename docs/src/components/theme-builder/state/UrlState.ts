import { Str, Arr, pipe } from '~/utils/effect';

import type { ControlPoint } from '../types';

const PRECISION = 10; // Let's assume a precision of 3 decimal places

function formatNumber(num: number, precision: number): string {
  const fixed = num.toFixed(precision);
  return fixed.replace(/0+$/, '').replace(/\.$/, '');
}

/**
 * Serializes control points to a compact string for URL storage.
 * It stores each point and the delta of its out-handle, saving space.
 * Format per point: "px,py,dx,dy"
 */
export function serializePoints(points: ControlPoint[], precision = PRECISION): string {
  return points
    .map((cp) => {
      const dx = cp.outHandle[0] - cp.point[0];
      const dy = cp.outHandle[1] - cp.point[1];

      const coords = [cp.point[0], cp.point[1], dx, dy];

      return coords.map((n) => formatNumber(n, precision)).join(' ');
    })
    .join(',');
}

/**
 * Deserializes a string from a URL into an array of ControlPoints.
 * It is backward-compatible and can read both the old 6-value format
 * and the new optimized 4-value format.
 */
export function deserializePoints(data: string): ControlPoint[] {
  return pipe(
    data,
    Str.split(','),
    Arr.forEach((pointStr) => {
      const parts = pointStr.split(' ').map((s) => Number.parseFloat(s));

      if (parts.some(isNaN)) return null;

      if (parts.length === 4) {
        const [px, py, dx, dy] = parts;
        return {
          point: [px, py],
          outHandle: [px + dx, py + dy],
          inHandle: [px - dx, py - dy],
        };
      }

      console.warn('Skipping malformed point data in URL:', pointStr);
      return null;
    }),
    Arr.filter((p): p is ControlPoint => p !== null),
  );
}
