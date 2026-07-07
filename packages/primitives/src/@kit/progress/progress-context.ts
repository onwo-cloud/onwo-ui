import type { Signal } from '@qwik.dev/core';
import { createContextId } from '@qwik.dev/core';

export interface ProgressContextData {
  valueSig: Signal<number | null>;
  maxSig: Signal<number>;
  minSig: Signal<number>;
  dataAttributesSig: Signal<Record<string, string | number | undefined>>;
}

export const ProgressContext = createContextId<ProgressContextData>('progress');
