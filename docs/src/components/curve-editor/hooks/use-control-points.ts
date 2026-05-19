import {
  $,
  useComputed$,
  useSignal,
  noSerialize,
  type NoSerialize,
  type Signal,
} from '@builder.io/qwik';

import type { ControlPoint, WithId } from '../types';

interface UseControlPointsProps {
  points: Signal<ControlPoint[]>;
  axis: 'x' | 'y';
}

export type ControlPointControls = ReturnType<typeof useControlPoints>;

export const useControlPoints = ({ points, axis }: UseControlPointsProps) => {
  // 1. Initialize Signal with NoSerialize wrapper
  const idCache = useSignal<NoSerialize<WeakMap<ControlPoint, string>>>(noSerialize(new WeakMap()));

  // 2. Computed View: Synchronous mapping and sorting
  const sortedPoints = useComputed$(() => {
    // Safe access to WeakMap (re-init if lost during serialization)
    let map = idCache.value;
    if (!map) {
      map = noSerialize(new WeakMap());
      idCache.value = map;
    }

    const sortIdx = axis === 'x' ? 0 : 1;

    // Inline the ID generation logic here to preserve Object Reference Identity
    const withIds = points.value.map((p) => {
      let id = map!.get(p);
      if (!id) {
        id = crypto.randomUUID();
        map!.set(p, id);
      }
      return { ...p, id };
    });

    return withIds.sort((a, b) => a.point[sortIdx] - b.point[sortIdx]);
  });

  // 3. Actions
  const addPoint$ = $((newPoint: ControlPoint) => {
    points.value = [...points.value, newPoint];
  });

  const updatePoint$ = $((id: string, updates: Partial<ControlPoint>) => {
    const map = idCache.value; // Safe to access signal value in QRL
    if (!map) return;

    const index = points.value.findIndex((p) => map.get(p) === id);
    if (index === -1) return;

    const newPoint = { ...points.value[index], ...updates };

    // Transfer ID to new object reference
    map.set(newPoint, id);

    const newPoints = [...points.value];
    newPoints[index] = newPoint;
    points.value = newPoints;
  });

  const deletePoint$ = $((id: string) => {
    if (points.value.length <= 2) return;
    const map = idCache.value;
    if (!map) return;
    points.value = points.value.filter((p) => map.get(p) !== id);
  });

  const getPoint$ = $((id: string): WithId<ControlPoint> | undefined => {
    const map = idCache.value;
    if (!map) return undefined;
    const point = points.value.find((p) => map.get(p) === id);
    return point ? { ...point, id } : undefined;
  });

  return { sortedPoints, addPoint$, getPoint$, updatePoint$, deletePoint$ };
};
