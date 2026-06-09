import type { Signal } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

import { ResponsiveCanvas } from '~/commons/responsive-canvas/index';

import { CurveEditorCanvas } from './components/curve-editor-canvas';
import { CurveEditorContext } from './curve-editor-context';
import { type ControlPointControls, useControlPoints } from './hooks/use-control-points';
import { useCurveEditorStore } from './hooks/use-curve-editor-store';
import type { Theme} from './theme';
import { defaultTheme } from './theme';
import type { ControlPoint } from './types';

export * from './types';

export const CANVAS_NAME = 'curve-editor-canvas';

interface CurveEditorProps {
  decimalPrecision?: number;
  axis?: 'x' | 'y';
  points: Signal<ControlPoint[]>;
  theme?: Partial<Theme>;
}

export const CurveEditor = component$((props: CurveEditorProps) => {
  const axis = props.axis ?? 'x';
  const finalTheme = { ...defaultTheme, ...props.theme };

  const controlPointsControls: ControlPointControls = useControlPoints({
    points: props.points,
    axis: axis,
  });

  const { store, actions } = useCurveEditorStore({
    controls: controlPointsControls,
    axis: axis,
  });

  CurveEditorContext.useProvider({
    theme: finalTheme,
    store,
    actions,
    controlPointsControls,
  });

  return (
    <ResponsiveCanvas>
      <CurveEditorCanvas decimalPrecision={props.decimalPrecision ?? 3} axis={axis} />
    </ResponsiveCanvas>
  );
});
