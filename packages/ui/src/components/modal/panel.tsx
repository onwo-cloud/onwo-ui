import type { Component } from '@builder.io/qwik';
import { Slot, component$, useSignal, useTask$ } from '@builder.io/qwik';
import { Animated, Modal } from '@onwo/primitives';
import { BackdropOverlay } from '../backdrop-overlay';

type PanelProps = object;

export const Panel: Component<PanelProps> = component$((_: PanelProps) => {
  const context = Modal.useModalContext();
  const overrideVisible = useSignal<boolean>(false);

  // We override the visibility mechanism of the panel such that the animation
  // stay mounted when the panel is closed.
  useTask$(({ track }) => {
    track(() => context.opened.value);
    if (context.opened.value) {
      overrideVisible.value = true;
    }
  });

  return (
    <>
      <Modal.Panel
        class="fixed top-4 left-4 overflow-visible"
        style={{
          width: 'calc(100% - calc(var(--spacing) * 8))',
          height: 'calc(100% - calc(var(--spacing) * 8))',
        }}
        bind:override={overrideVisible}
      >
        <Animated
          bind:visible={context.opened}
          in={{ durationMs: 100, timing: 'ease-in', opacity: 0, slide: { y: '1rem' } }}
          out={{ durationMs: 100, timing: 'ease-in', opacity: 0, slide: { y: '1rem' } }}
          onOutEnd$={() => {
            overrideVisible.value = false;
          }}
          class="absolute bottom-0 w-full h-fit sm:max-w-lg sm:bottom-[unset] sm:top-1/2 sm:-translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2 border border-line overflow-hidden bg-paper rounded-lg"
        >
          <Slot />
        </Animated>
      </Modal.Panel>
      <BackdropOverlay class="pointer-events-none" bind:open={context.opened} />
    </>
  );
});
