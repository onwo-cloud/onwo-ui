import { useVisibleTask$, type NoSerialize, type Signal } from '@builder.io/qwik';

import type { CoordinateMapper } from '../components/coordinate-mapper';
import type { CurveEditorContextValue } from '../curve-editor-context';
import { type ControlPointControls } from '../hooks/use-control-points';
import type { ControlPoint, WithId } from '../types';

type UseDraggableProps = {
  rootRef: Signal<HTMLDivElement | undefined>;
  svgRef: Signal<SVGSVGElement | undefined>;
  mapper: Signal<NoSerialize<CoordinateMapper> | undefined>;
  controlPointsControls: ControlPointControls;
  store: CurveEditorContextValue['store'];
  actions: CurveEditorContextValue['actions'];
  axis: 'x' | 'y';
};

export const useDraggable = ({
  rootRef,
  svgRef,
  mapper,
  store,
  controlPointsControls: pointControls,
  actions,
  axis,
}: UseDraggableProps) => {
  useVisibleTask$(({ cleanup }) => {
    const svgElem = svgRef.value;
    if (!svgElem) return;

    const sortIndex = axis === 'x' ? 0 : 1;
    const freeIndex = axis === 'x' ? 1 : 0;

    // Use closure variables to track drag state for performance
    let animationFrameId: number | null = null;
    let lastMouseEvent: MouseEvent | null = null;

    const updateDragPosition = () => {
      if (!lastMouseEvent || !store.isDragging || !mapper.value) {
        animationFrameId = null;
        return;
      }

      const normCoords = mapper.value.screenToNormalized(lastMouseEvent);
      const cpCoord: [number, number] = [normCoords.x, normCoords.y];

      if (store.activeElement?.kind === 'point') {
        cpCoord[sortIndex] = Math.max(0.01, Math.min(0.99, cpCoord[sortIndex]));
        cpCoord[freeIndex] = Math.max(0, Math.min(1, cpCoord[freeIndex]));
      }

      actions.updateDraggedPoint$(cpCoord[0], cpCoord[1]);
      animationFrameId = null;
    };

    const onMouseMove$ = (e: MouseEvent) => {
      if (!store.isDragging) return;
      lastMouseEvent = e;

      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(updateDragPosition);
      }
    };

    const onMouseUp$ = () => {
      if (store.isDragging) {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        actions.endDrag$();
      }
      lastMouseEvent = null;
    };

    const onBackgroundMouseDown$ = (e: MouseEvent) => {
      if (!mapper.value || (e.target as SVGElement).closest('[data-point-id]') || e.button !== 0)
        return;
      e.preventDefault();

      const clickCoords = mapper.value.screenToNormalized(e);
      const newPoint: WithId<ControlPoint> = {
        point: [clickCoords.x, clickCoords.y],
        inHandle: [clickCoords.x, clickCoords.y],
        outHandle: [clickCoords.x, clickCoords.y],
        id: crypto.randomUUID(),
      };
      pointControls.addPoint$(newPoint);
      actions.startDrag$(newPoint.id, 'point');
    };

    const onKeyDown$ = (e: KeyboardEvent) => {
      if (!store.focusedElement?.id) return;
      const step = e.shiftKey ? 0.05 : 0.01;
      let dx = 0,
        dy = 0;

      switch (e.key) {
        case 'ArrowUp':
          dy = step;
          break;
        case 'ArrowDown':
          dy = -step;
          break;
        case 'ArrowLeft':
          dx = -step;
          break;
        case 'ArrowRight':
          dx = step;
          break;
        default:
          return;
      }
      e.preventDefault();
      actions.moveFocusedElement$(dx, dy);
    };

    const handleDocumentMouseDown$ = (e: MouseEvent) => {
      if (rootRef.value && !rootRef.value.contains(e.target as Node)) {
        actions.clearFocus$();
      }
    };

    const preventContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('mousemove', onMouseMove$);
    document.addEventListener('mouseup', onMouseUp$);
    document.addEventListener('keydown', onKeyDown$);
    document.addEventListener('mousedown', handleDocumentMouseDown$);
    svgElem.addEventListener('mousedown', onBackgroundMouseDown$);
    svgElem.addEventListener('contextmenu', preventContextMenu);

    cleanup(() => {
      document.removeEventListener('mousemove', onMouseMove$);
      document.removeEventListener('mouseup', onMouseUp$);
      document.removeEventListener('keydown', onKeyDown$);
      document.removeEventListener('mousedown', handleDocumentMouseDown$);
      svgElem.removeEventListener('mousedown', onBackgroundMouseDown$);
      svgElem.removeEventListener('contextmenu', preventContextMenu);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    });
  });
};
