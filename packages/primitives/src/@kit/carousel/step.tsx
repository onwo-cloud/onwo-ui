import type { QwikIntrinsicElements } from '@qwik.dev/core';
import { component$, Slot, useComputed$, useContext, $ } from '@qwik.dev/core';
import { carouselContextId } from './context';

type AllowedElements = 'button' | 'a' | 'div' | 'span';

type StepProps = {
  _index?: number;
};

export const Step = component$(
  <C extends AllowedElements = 'button'>(
    props: QwikIntrinsicElements[C] & { as?: C } & StepProps,
  ) => {
    const context = useContext(carouselContextId);
    const { as, _index, ...rest } = props;
    const Comp = as ?? 'button' as any;

    const localIndexSig = useComputed$(() => _index ?? 0);
    const isCurrentSig = useComputed$(() =>
      context.currentIndexSig.value === _index ? 'step' : undefined,
    );

    const handleClick$ = $(() => {
      context.currentIndexSig.value = localIndexSig.value;
    });

    return (
      <Comp
        data-qui-carousel-step
        aria-current={isCurrentSig.value}
        data-current={isCurrentSig.value ? '' : undefined}
        data-step={localIndexSig.value + 1}
        data-active={context.currentIndexSig.value >= localIndexSig.value}
        {...(Comp === 'button' && { onClick$: [handleClick$, rest.onClick$] })}
        {...rest}
      >
        <Slot />
      </Comp>
    );
  },
);
