import { component$, type NoSerialize, useSignal } from '@builder.io/qwik';

import type { CoordinateMapper } from '../../components/coordinate-mapper';
import { CurveEditorContext } from '../../curve-editor-context';

import { Handle } from './handle';

export type DraggablePointProps = {
  pSvg: { x: number; y: number };
  inHSvg: { x: number; y: number };
  outHSvg: { x: number; y: number };
  id: string;
  mapper: NoSerialize<CoordinateMapper>;
  axis: 'x' | 'y';
};

export const DraggablePoint = component$(
  ({ pSvg, inHSvg, outHSvg, id, mapper, axis }: DraggablePointProps) => {
    const context = CurveEditorContext.use();
    const { theme } = context;
    const isPointFocused =
      context.store.focusedElement?.id === id && context.store.focusedElement?.kind === 'point';
    const isHovered = useSignal(false);

    return (
      <g
        data-point-id={id}
        onMouseEnter$={() => (isHovered.value = true)}
        onMouseLeave$={() => (isHovered.value = false)}
      >
        {/* In-handle line */}
        <line
          stroke={theme.handleLineColorSecondary}
          stroke-width={theme.handleLineWidthSecondary}
          stroke-linecap="round"
          x1={pSvg.x}
          y1={pSvg.y}
          x2={inHSvg.x}
          y2={inHSvg.y}
        />
        <line
          stroke={theme.handleLineColorPrimary}
          stroke-width={theme.handleLineWidthPrimary}
          stroke-linecap="round"
          x1={pSvg.x}
          y1={pSvg.y}
          x2={inHSvg.x}
          y2={inHSvg.y}
        />

        {/* Out-handle line */}
        <line
          stroke={theme.handleLineColorSecondary}
          stroke-width={theme.handleLineWidthSecondary}
          stroke-linecap="round"
          x1={pSvg.x}
          y1={pSvg.y}
          x2={outHSvg.x}
          y2={outHSvg.y}
        />
        <line
          stroke={theme.handleLineColorPrimary}
          stroke-width={theme.handleLineWidthPrimary}
          stroke-linecap="round"
          x1={pSvg.x}
          y1={pSvg.y}
          x2={outHSvg.x}
          y2={outHSvg.y}
        />

        <Handle id={id} name="inHandle" x={inHSvg.x} y={inHSvg.y} />
        <Handle id={id} name="outHandle" x={outHSvg.x} y={outHSvg.y} />

        {/* Anchor Point */}
        <g>
          <circle
            style={{
              fill: isHovered.value ? theme.pointHoverColor : theme.pointColor,
              stroke: isPointFocused ? theme.focusColor : 'transparent',
              strokeWidth: isPointFocused ? theme.focusStrokeWidth : 0,
              transition: 'fill 0.1s ease-in-out',
            }}
            r={theme.pointRadius}
            cx={pSvg.x}
            cy={pSvg.y}
          />
          <circle
            data-element-type="point"
            style="cursor: move;"
            fill="transparent"
            r="12"
            cx={pSvg.x}
            cy={pSvg.y}
            onMouseDown$={(e) => {
              e.stopPropagation();
              context.actions.setFocusedElement$(id, 'point');

              if (e.button === 1) {
                e.preventDefault();
                context.actions.deletePoint$(id);
              } else if (e.button === 2) {
                e.preventDefault();
                const startX = e.clientX;
                const startY = e.clientY;
                const timestamp = Date.now();
                let hasDragged = false;

                const onMouseMove = async (moveEvent: MouseEvent) => {
                  if (hasDragged) return;
                  const dx = moveEvent.clientX - startX;
                  const dy = moveEvent.clientY - startY;

                  // Check if the drag has exceeded the 5px threshold
                  if (Math.hypot(dx, dy) > 5) {
                    hasDragged = true;

                    const pointToDrag = await context.controlPointsControls.getPoint$(id);
                    if (!pointToDrag || !mapper) {
                      return;
                    }

                    // Determine which handle to drag based on direction
                    const currentPSvg = mapper.normalizedToSvg(pointToDrag.point);
                    const normCoords = mapper.screenToNormalized(moveEvent);
                    const currentSvgPos = mapper.normalizedToSvg([normCoords.x, normCoords.y]);
                    const handleToDrag = (
                      axis === 'x'
                        ? currentSvgPos.x < currentPSvg.x
                        : currentSvgPos.y > currentPSvg.y
                    )
                      ? 'inHandle'
                      : 'outHandle';

                    context.actions.startDrag$(id, handleToDrag);
                    document.removeEventListener('mousemove', onMouseMove);
                    document.removeEventListener('mouseup', onMouseUp);
                  }
                };

                const onMouseUp = () => {
                  if (!hasDragged && Date.now() - timestamp < 250) {
                    context.actions.deletePoint$(id);
                  }
                  document.removeEventListener('mousemove', onMouseMove);
                  document.removeEventListener('mouseup', onMouseUp);
                };

                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp);
              } else {
                context.actions.startDrag$(id, 'point');
              }
            }}
            onContextMenu$={(e) => e.preventDefault()}
          />
        </g>
      </g>
    );
  },
);
