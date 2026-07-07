import { Slot, component$, useSignal, useTask$ } from '@qwik.dev/core';
import { Animated } from '@onwo/primitives/animated';
import { Panel as PPanel } from '@onwo/primitives/modal';

import { BackdropOverlay } from '../backdrop-overlay';

export type ModalPanelProps = {
  class?: string;
};

export const ModalPanel = component$((props: ModalPanelProps) => {
  const keepMounted = useSignal<boolean>(false);
  const opened = useSignal<boolean>(false);

  // We override the visibility mechanism of the panel such that the animation
  // stay mounted when the panel is closed.
  useTask$(({ track }) => {
    track(() => opened.value);
    if (opened.value) {
      keepMounted.value = true;
    }
  });

  return (
    <>
      <PPanel
        class="pointer-event-none fixed top-4 left-4 overflow-visible"
        style={{
          width: 'calc(100% - calc(var(--spacing) * 8))',
          height: 'calc(100% - calc(var(--spacing) * 8))',
        }}
        bind:opened={opened}
        bind:override={keepMounted}
      >
        <Animated
          visible={opened}
          in={{ durationMs: 100, timing: 'ease-in', opacity: 0, slide: { y: '1rem' } }}
          out={{ durationMs: 100, timing: 'ease-in', opacity: 0, slide: { y: '1rem' } }}
          onOutEnd$={() => {
            keepMounted.value = false;
          }}
          class={[
            'pointer-events-auto absolute bottom-0 w-full h-fit sm:max-w-lg sm:bottom-[unset] sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 border border-line overflow-hidden bg-white rounded-lg',
            props.class,
          ]}
        >
          <Slot />
        </Animated>
      </PPanel>
      <BackdropOverlay visible={opened} />
    </>
  );
});
