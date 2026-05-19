import { ControlPoint, WithId } from '~/components/curve-editor';

const PRECISION = 5;

function formatNumber(num: number, precision: number): string {
  const fixed = num.toFixed(precision);
  return fixed.replace(/0+$/, '').replace(/\.$/, '');
}

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

export function deserializePoints(data: string): WithId<ControlPoint>[] {
  if (!data) return [];
  try {
    return (
      data
        .split(',')
        // FIX: Add an explicit return type to the map callback to resolve TS inference issues.
        .map((pointStr): WithId<ControlPoint> | null => {
          const parts = pointStr.split(' ').map((s) => Number.parseFloat(s));
          if (parts.some(isNaN)) return null;
          if (parts.length === 4) {
            const [px, py, dx, dy] = parts;
            return {
              id: crypto.randomUUID(),
              point: [px, py],
              outHandle: [px + dx, py + dy],
              inHandle: [px - dx, py - dy],
            };
          }
          console.warn('Skipping malformed point data in URL:', pointStr);
          return null;
        })
        .filter((p): p is WithId<ControlPoint> => p !== null)
    );
  } catch (error) {
    console.error('Failed to deserialize points from URL', error);
    return [];
  }
}
