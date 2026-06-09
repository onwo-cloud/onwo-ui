import type { Signal } from '@builder.io/qwik';
import { initContext } from '~primitives/utils/context-utils';

export interface DimensionData {
  size: Signal<{ width: number; height: number }>;
  ref: Signal<HTMLDivElement | undefined>;
}

export const DimensionsContext = initContext<DimensionData>('dimensions-context');
