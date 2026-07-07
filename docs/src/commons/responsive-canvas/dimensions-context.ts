import type { Signal } from '@qwik.dev/core';
import { initContext } from '~primitives/utils/context-utils';

export interface DimensionData {
  size: Signal<{ width: number; height: number }>;
  ref: Signal<HTMLDivElement | undefined>;
}

export const DimensionsContext = initContext<DimensionData>('dimensions-context');
