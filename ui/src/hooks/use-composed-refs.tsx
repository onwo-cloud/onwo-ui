import type { Signal } from '@builder.io/qwik';

type Ref<EL extends Element = Element> = Signal<Element | undefined> | RefFnInterface<EL>;

type RefFnInterface<EL> = {
  (el: EL): void;
};

export const useComposedRefs =
  <EL extends Element = Element>(...refs: (Ref<EL> | undefined)[]): RefFnInterface<EL> =>
  (el: EL) =>
    // eslint-disable-next-line unicorn/no-array-for-each
    refs.forEach((ref?: Ref<EL>) => {
      if (ref === undefined) return;
      if (typeof ref === 'function') {
        ref(el);
      } else {
        ref.value = el;
      }
    });
