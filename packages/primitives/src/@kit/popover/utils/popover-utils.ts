import { $ } from '@qwik.dev/core';
import { supportClosingAnimation } from '~primitives/utils/closing-animation';

export const showPopover = $(async (el: HTMLElement) => {
  try {
    if (el && !el.matches(':popover-open')) {
      el.dataset.opening = '';
      el.classList.add('popover-opening');

      el.showPopover();

      // Force style recalculation so initial opening styles register
      void el.offsetHeight;

      requestAnimationFrame(() => {
        delete el.dataset.opening;
        el.classList.remove('popover-opening');
      });
    }
  } catch (err) {
    console.warn('showPopover failed:', err);
  }
});

export const closePopover = $(async (el: HTMLElement) => {
  try {
    if (el && el.matches(':popover-open')) {
      await supportClosingAnimation(
        el,
        $((element) => {
          try {
            if (element && element.matches(':popover-open')) {
              element.hidePopover();
            }
          } catch (err) {
            console.warn('hidePopover failed:', err);
          }
        }),
        'popover-closing'
      );
    }
  } catch (err) {
    console.warn('closePopover failed:', err);
  }
});
