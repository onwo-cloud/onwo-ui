import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot, useComputed$, useContext, $ } from '@builder.io/qwik';
import { Button } from '../button';
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
    const Comp = as ?? Button;

    const localIndexSig = useComputed$(() => _index ?? 0);
    const isCurrentSig = useComputed$(() =>
      context.currentIndexSig.value === _index ? 'step' : undefined,
    );

    const handleClick$ = $(() => {
      context.currentIndexSig.value = localIndexSig.value;
    });

    return (
      <>
        {/* @ts-expect-error annoying polymorphism */}
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
      </>
    );
  },
);
