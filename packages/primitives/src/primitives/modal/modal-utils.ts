import { $ } from '@builder.io/qwik';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock-upgrade';

export type WidthState = {
  width: number | null;
};

/**
 * Listens for animation/transition events in order to
 * remove Animation-CSS-Classes after animation/transition ended.
 */
export const supportClosingAnimation = $((modal: HTMLDialogElement) => {
  modal.dataset.closing = '';
  modal.classList.add('modal-closing');

  const { animationDuration, transitionDuration } = getComputedStyle(modal);

  if (animationDuration !== '0s') {
    modal.addEventListener(
      'animationend',
      (e) => {
        if (e.target === modal) {
          delete modal.dataset.closing;
          modal.classList.remove('modal-closing');
          enableBodyScroll(modal);
          modal.close();
        }
      },
      { once: true },
    );
  } else if (transitionDuration !== '0s') {
    modal.addEventListener(
      'transitionend',
      (e) => {
        if (e.target === modal) {
          delete modal.dataset.closing;
          modal.classList.remove('modal-closing');
          enableBodyScroll(modal);
          modal.close();
        }
      },
      { once: true },
    );
  } else if (animationDuration === '0s' && transitionDuration === '0s') {
    delete modal.dataset.closing;
    modal.classList.remove('modal-closing');
    enableBodyScroll(modal);
    modal.close();
  }
});

/**
 * Shows the given Modal.
 * Applies a CSS-Class to animate the modal-showing.
 * Calls the given callback that is executed after the Modal has been opened.
 */
export const showModal = $(async (modal: HTMLDialogElement) => {
  disableBodyScroll(modal, { reserveScrollBarGap: true });
  modal.showModal();
});

/**
 * Closes the given Modal.
 * Applies a CSS-Class to animate the Modal-closing.
 * Calls the given callback that is executed after the Modal has been closed.
 */
export const closeModal = $(async (modal: HTMLDialogElement) => {
  await supportClosingAnimation(modal);
});
