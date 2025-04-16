import { Slot, component$, type PropsOf } from '@builder.io/qwik';
import { Modal, styledcn } from '@onwo/primitives';
import { BackdropOverlay } from '../backdrop-overlay';

export const SPanel = styledcn(Modal.Panel)`
  border border-line rounded-lg items-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
`;

//const PanelBackdrop = () => {};

export const Panel = component$((props: PropsOf<typeof SPanel>) => {
  const context = Modal.useModalContext();

  return (
    <>
      <SPanel {...props}>
        <Slot />
      </SPanel>
      <BackdropOverlay class="pointer-events-none" bind:open={context.opened} />
    </>
  );
});
