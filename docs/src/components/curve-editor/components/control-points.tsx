import { component$ } from '@builder.io/qwik';
import type { NoSerialize } from '@builder.io/qwik';

import type { ControlPointControls } from '../hooks/use-control-points';

import type { CoordinateMapper } from './coordinate-mapper';
import { DraggablePoint } from './draggable-point';

type ControlPointsProps = {
  controls: ControlPointControls;
  mapper: NoSerialize<CoordinateMapper>;
  axis: 'x' | 'y';
};

export const ControlPoints = component$((props: ControlPointsProps) => {
  return (
    <>
      {props.mapper &&
        props.controls.sortedPoints.value.map((pData) => {
          const p = pData;
          const pSvg = props.mapper!.normalizedToSvg(p.point);
          const inHSvg = props.mapper!.normalizedToSvg(p.inHandle);
          const outHSvg = props.mapper!.normalizedToSvg(p.outHandle);

          return (
            <DraggablePoint
              key={pData.id}
              id={pData.id}
              pSvg={pSvg}
              inHSvg={inHSvg}
              outHSvg={outHSvg}
              mapper={props.mapper!}
              axis={props.axis}
            />
          );
        })}
    </>
  );
});
