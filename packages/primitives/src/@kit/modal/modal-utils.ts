import { $ } from '@qwik.dev/core';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock-upgrade';
import { supportClosingAnimation } from '~primitives/utils/closing-animation';

export type WidthState = {
  width: number | null;
};

export const showModal = $(async (modal: HTMLDialogElement) => {
  disableBodyScroll(modal, { reserveScrollBarGap: true });
  modal.showModal();
});

export const closeModal = $(async (modal: HTMLDialogElement) => {
  await supportClosingAnimation(
    modal,
    $((el) => {
      enableBodyScroll(el as HTMLDialogElement);
      try {
        (el as HTMLDialogElement).close();
      } catch {}
    }),
    'modal-closing'
  );
});

export { supportClosingAnimation };
