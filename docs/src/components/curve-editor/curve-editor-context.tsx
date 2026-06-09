import type { QRL } from '@builder.io/qwik';
import { initContext } from '@onwo/primitives';

import type { ControlPointControls } from './hooks/use-control-points';
import type { CurveEditorStore } from './hooks/use-curve-editor-store';
import type { Theme } from './theme';

export type CurveEditorContextValue = {
  theme: Theme;
  controlPointsControls: ControlPointControls;
  store: CurveEditorStore;
  actions: {
    startDrag$: QRL<(id: string, element: 'point' | 'inHandle' | 'outHandle') => void>;
    endDrag$: QRL<() => void>;
    updateDraggedPoint$: QRL<(cpX: number, cpY: number) => void>;
    deletePoint$: QRL<(id: string) => void>;
    resetHandles$: QRL<(id: string) => void>;
    setFocusedElement$: QRL<(id: string, element: 'point' | 'inHandle' | 'outHandle') => void>;
    clearFocus$: QRL<() => void>;
    moveFocusedElement$: QRL<(dx: number, dy: number) => void>;
  };
};

export const CurveEditorContext = initContext<CurveEditorContextValue>('curve-editor-context');
