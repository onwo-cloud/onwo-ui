import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot, useContext, $ } from '@builder.io/qwik';
import { Button } from '../button';
import { carouselContextId } from './context';

export const Player = component$((props: PropsOf<'button'>) => {
  const context = useContext(carouselContextId);

  const handleClick$ = $(() => {
    context.isAutoplaySig.value = !context.isAutoplaySig.value;
  });

  return (
    <Button
      aria-label={
        context.isAutoplaySig.value ? 'stop automatic slide show' : 'start automatic slide show'
      }
      onClick$={[handleClick$, props.onClick$]}
      data-qui-carousel-player
      {...props}
    >
      <Slot />
    </Button>
  );
});
