import { useStore, $ } from '@builder.io/qwik';

import type { CurveEditorContextValue } from '../curve-editor-context';

import type { ControlPointControls } from './use-control-points';

// Define the types for clarity and reuse
export type ElementRef = {
  kind: 'point' | 'inHandle' | 'outHandle';
  id: string;
};

export type CurveEditorStore = {
  activeElement: ElementRef | null;
  focusedElement: ElementRef | null;
  isDragging: boolean;
};

export type UseCurveEditorStoreProps = {
  controls: ControlPointControls;
  axis: 'x' | 'y';
};

export const useCurveEditorStore = (props: UseCurveEditorStoreProps) => {
  // Initialize the store according to the Store type definition
  const store = useStore<CurveEditorStore>({
    activeElement: null,
    focusedElement: null,
    isDragging: false,
  });

  const actions: CurveEditorContextValue['actions'] = {
    startDrag$: $((id, element) => {
      const el: ElementRef = { kind: element, id };
      store.activeElement = el;
      store.focusedElement = el;
      store.isDragging = true;
    }),

    endDrag$: $(() => {
      // Keep the element focused after dragging ends
      store.activeElement = null;
      store.isDragging = false;
    }),

    updateDraggedPoint$: $(async (cpX, cpY) => {
      if (!store.activeElement) return;

      const { id, kind } = store.activeElement;
      const point = await props.controls.getPoint$(id);
      if (!point) return;

      if (kind === 'point') {
        const [dx, dy] = [cpX - point.point[0], cpY - point.point[1]];
        point.point = [cpX, cpY];
        point.inHandle = [point.inHandle[0] + dx, point.inHandle[1] + dy];
        point.outHandle = [point.outHandle[0] + dx, point.outHandle[1] + dy];
      } else {
        const handle = kind;
        const oppositeHandle = handle === 'inHandle' ? 'outHandle' : 'inHandle';
        point[handle] = [cpX, cpY];
        const [dx, dy] = [point[handle][0] - point.point[0], point[handle][1] - point.point[1]];
        point[oppositeHandle] = [point.point[0] - dx, point.point[1] - dy];
      }

      await props.controls.updatePoint$(id, point);
    }),

    deletePoint$: $((id) => {
      props.controls.deletePoint$(id);
      if (store.focusedElement?.id === id) {
        store.focusedElement = null;
      }
      if (store.activeElement?.id === id) {
        store.activeElement = null;
      }
    }),

    resetHandles$: $(async (id) => {
      const point = await props.controls.getPoint$(id);
      if (!point) return;
      point.inHandle = [...point.point];
      point.outHandle = [...point.point];
      await props.controls.updatePoint$(id, point);
    }),

    setFocusedElement$: $((id, element) => {
      store.focusedElement = { id, kind: element };
    }),

    clearFocus$: $(() => {
      store.focusedElement = null;
    }),

    moveFocusedElement$: $(async (dx: number, dy: number) => {
      if (!store.focusedElement) return;

      const { id, kind } = store.focusedElement;
      const point = await props.controls.getPoint$(id);
      if (!point) return;

      const clamp = (val: number) => Math.max(0, Math.min(1, val));

      if (kind === 'point') {
        const [sortIndex, freeIndex] = props.axis === 'x' ? [0, 1] : [1, 0];
        const newPos: [number, number] = [...point.point];
        newPos[0] += dx;
        newPos[1] += dy;
        newPos[sortIndex] = Math.max(0.01, Math.min(0.99, newPos[sortIndex]));
        newPos[freeIndex] = clamp(newPos[freeIndex]);

        const [actualDx, actualDy] = [newPos[0] - point.point[0], newPos[1] - point.point[1]];
        point.point = newPos;
        point.inHandle[0] += actualDx;
        point.inHandle[1] += actualDy;
        point.outHandle[0] += actualDx;
        point.outHandle[1] += actualDy;
      } else {
        const opposite = kind === 'inHandle' ? 'outHandle' : 'inHandle';
        point[kind][0] = clamp(point[kind][0] + dx);
        point[kind][1] = clamp(point[kind][1] + dy);

        const [deltaX, deltaY] = [point[kind][0] - point.point[0], point[kind][1] - point.point[1]];
        point[opposite] = [point.point[0] - deltaX, point.point[1] - deltaY];
      }
      await props.controls.updatePoint$(id, point);
    }),
  };

  return { store, actions };
};
