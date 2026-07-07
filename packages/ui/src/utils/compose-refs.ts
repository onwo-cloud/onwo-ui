import type { Signal } from '@qwik.dev/core';

type Ref<EL extends Element = Element> = Signal<Element | undefined> | RefFnInterface<EL>;

type RefFnInterface<EL> = {
  (el: EL): void;
};

export const composeRefs =
  <EL extends Element = Element>(...refs: (Ref<EL> | undefined)[]): RefFnInterface<EL> =>
  (el: EL) =>
    refs.forEach((ref?: Ref<EL>) => {
      if (ref === undefined) return;
      if (typeof ref === 'function') {
        ref(el);
      } else {
        ref.value = el;
      }
    });
