import { component$, useComputed$ } from '@builder.io/qwik';
import { NoSerialize } from '@builder.io/qwik';

import { CurveEditorContext } from '../curve-editor-context';
import { ControlPointControls } from '../hooks/use-control-points';

import type { CoordinateMapper } from './coordinate-mapper';

interface CurvePathProps {
  controls: ControlPointControls;
  mapper: NoSerialize<CoordinateMapper>;
  axis: 'x' | 'y';
}

export const CurvePath = component$<CurvePathProps>((props) => {
  const { theme } = CurveEditorContext.use();

  const pathData = useComputed$(() => {
    const points = props.controls.sortedPoints.value;
    const localMapper = props.mapper;
    if (!localMapper || points.length < 2) return '';

    const p1Svg = localMapper.normalizedToSvg(points[0].point);
    let d = `M ${p1Svg.x},${p1Svg.y}`;

    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const p1Out = localMapper.normalizedToSvg(p1.outHandle);
      const p2In = localMapper.normalizedToSvg(p2.inHandle);
      const p2Point = localMapper.normalizedToSvg(p2.point);
      d += ` C ${p1Out.x},${p1Out.y} ${p2In.x},${p2In.y} ${p2Point.x},${p2Point.y}`;
    }
    return d;
  });

  return (
    <>
      <path
        d={pathData.value}
        stroke={theme.curveColorSecondary}
        stroke-width={theme.curveWidthSecondary}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d={pathData.value}
        stroke={theme.curveColorPrimary}
        stroke-width={theme.curveWidthPrimary}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </>
  );
});
