import { $, component$, useSignal } from '@builder.io/qwik';

import { useOnTap } from '~/hooks/use-on-tap';
import { mergeOnEvents } from '~/utils/props';

import { CurveEditorContext } from '../../curve-editor-context';

type HandleProps = {
  id: string;
  name: 'inHandle' | 'outHandle';
  x: number;
  y: number;
};

export const Handle = component$((props: HandleProps) => {
  const context = CurveEditorContext.use();
  const { theme } = context;
  const focused =
    context.store.focusedElement?.id === props.id &&
    context.store.focusedElement?.kind === props.name;
  const isHovered = useSignal(false);

  const tap = useOnTap(
    $((event) => {
      if (event.button !== 2) return;
      context.actions.resetHandles$(props.id);
    }),
    { moveThreshold: 0, delayMs: 2000 },
  );

  return (
    <g
      onMouseEnter$={() => (isHovered.value = true)}
      onMouseLeave$={() => (isHovered.value = false)}
    >
      <rect
        style={{
          fill: isHovered.value ? theme.handleHoverColor : theme.handleColor,
          stroke: focused ? theme.focusColor : 'transparent',
          strokeWidth: focused ? theme.focusStrokeWidth : 0,
          transition: 'fill 0.1s ease-in-out',
        }}
        x={props.x - theme.handleSize / 2}
        y={props.y - theme.handleSize / 2}
        width={theme.handleSize}
        height={theme.handleSize}
      />
      <circle
        data-element-type={props.name}
        style="cursor: move;"
        fill="transparent"
        r="10"
        cx={props.x}
        cy={props.y}
        {...mergeOnEvents<'circle'>(tap, {
          onMouseDown$: $((e) => {
            e.stopPropagation();
            context.actions.setFocusedElement$(props.id, props.name);
            if (e.button === 1) {
              e.preventDefault();
              context.actions.resetHandles$(props.id);
            } else {
              context.actions.startDrag$(props.id, props.name);
            }
          }),
          onContextMenu$: $((e) => {
            e.preventDefault();
          }),
        })}
      />
    </g>
  );
});
