import { component$, useSignal, useVisibleTask$, type Signal } from '@builder.io/qwik';
import { cn } from '@onwo/ui';
import { animate } from 'motion';

export interface HoverBoxProps {
  activeElement: Signal<HTMLButtonElement>;
  class?: string;
}

export const HoverBox = component$<HoverBoxProps>(({ activeElement, ...props }) => {
  const hoverBox = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    const elem = track(() => activeElement.value);
    const box = track(() => hoverBox.value);
    if (!elem || !box) return;

    const { offsetLeft, offsetWidth, offsetHeight } = elem;

    if (box.style.opacity === '0') {
      box.style.width = `${offsetWidth}px`;
      box.style.height = `${offsetHeight}px`;
      box.style.transform = `translateX(${offsetLeft}px)`;
      (animate as any)(
        box,
        {
          opacity: 1,
        },
        {
          duration: 0.2,
          easing: 'easeOut',
        },
      );

      return;
    }
    try {
      (animate as any)(
        box,
        {
          transform: `translateX(${offsetLeft}px)`,
          width: `${offsetWidth}px`,
          height: `${offsetHeight}px`,
        },
        {
          duration: 0.2,
          easing: 'easeOut',
        },
      );
      box.style.opacity = '1';
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <div
      ref={hoverBox}
      class={cn('absolute bg-papyrus rounded-full  pointer-events-none', props.class)}
      style={{
        opacity: 0,
        zIndex: 1,
        transform: 'translateX(0px)',
        width: '0px',
      }}
    />
  );
});
