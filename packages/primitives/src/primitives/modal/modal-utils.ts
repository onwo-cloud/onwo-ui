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

/**
 * Determines if the backdrop of the Modal has been clicked.
 */
export const wasModalBackdropClicked = $(
  (modal: HTMLDialogElement | undefined, clickEvent: MouseEvent): boolean => {
    if (!modal) {
      return false;
    }

    const rect = modal.getBoundingClientRect();

    const wasBackdropClicked =
      rect.left > clickEvent.clientX ||
      rect.right < clickEvent.clientX ||
      rect.top > clickEvent.clientY ||
      rect.bottom < clickEvent.clientY;

    /**
     * If the inside focusable elements are not prevented, such as a button it will also fire a click event.
     *
     * Hitting the enter or space keys on a button inside of the dialog for example, will fire a "pointer" event. In reality, it fires our onClick$ handler because we have not prevented the default behavior.
     *
     * This is why we check if the pointerId is -1.
     **/
    return (clickEvent as PointerEvent).pointerId === -1 ? false : wasBackdropClicked;
  },
);
