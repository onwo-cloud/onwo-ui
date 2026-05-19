import { component$, useSignal, useTask$, noSerialize, NoSerialize } from '@builder.io/qwik';

import { DimensionsContext } from '~/commons/responsive-canvas/dimensions-context';

import { CurveEditorContext } from '../curve-editor-context';
import { useDraggable } from '../hooks/use-draggable';

import { ControlPoints } from './control-points';
import { CoordinateMapper, Dimensions } from './coordinate-mapper';
import { CurvePath } from './curve-path';

const MARGIN = 40;

export interface CurveEditorCanvasProps {
  decimalPrecision?: number;
  axis: 'x' | 'y';
}

export const CurveEditorCanvas = component$((props: CurveEditorCanvasProps) => {
  const { theme, store, controlPointsControls, actions } = CurveEditorContext.use();
  const svgRef = useSignal<SVGSVGElement>();
  const mapper = useSignal<NoSerialize<CoordinateMapper>>();

  // Get dimensions and the container ref from the context via the hook.
  const { size, ref: rootRef } = DimensionsContext.use();

  useTask$(({ track }) => {
    const { width, height } = track(() => size.value);

    if (width > 0 && height > 0 && svgRef.value) {
      const fullDims: Dimensions = {
        width,
        height,
        margin: MARGIN,
        effectiveWidth: width - MARGIN * 2,
        effectiveHeight: height - MARGIN * 2,
      };
      mapper.value = noSerialize(
        new CoordinateMapper(svgRef.value, fullDims, props.decimalPrecision),
      );
    }
  });

  useDraggable({
    rootRef,
    svgRef,
    mapper,
    store,
    actions,
    controlPointsControls,
    axis: props.axis,
  });

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${size.value.width} ${size.value.height}`}
      style={{
        backgroundColor: theme.bgColor,
        border: `1px solid ${theme.borderColor}`,
        userSelect: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
      }}
    >
      {mapper.value && (
        <>
          <CurvePath controls={controlPointsControls} mapper={mapper.value} axis={props.axis} />
          <ControlPoints controls={controlPointsControls} mapper={mapper.value} axis={props.axis} />
        </>
      )}
    </svg>
  );
});
