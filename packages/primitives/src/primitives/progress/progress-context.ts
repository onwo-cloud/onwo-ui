import type { Signal } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

export interface ProgressContextData {
  valueSig: Signal<number | null>;
  maxSig: Signal<number>;
  minSig: Signal<number>;
  dataAttributesSig: Signal<Record<string, string | number | undefined>>;
}

export const ProgressContext = createContextId<ProgressContextData>('progress');
