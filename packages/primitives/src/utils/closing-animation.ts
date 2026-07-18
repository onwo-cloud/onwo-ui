import { $ } from '@qwik.dev/core';

const parseMs = (str: string) => {
  if (!str) return 0;
  const trimmed = str.trim();
  if (trimmed.endsWith('ms')) return parseFloat(trimmed) || 0;
  if (trimmed.endsWith('s')) return (parseFloat(trimmed) || 0) * 1000;
  return 0;
};

/**
 * Parses max total duration (duration + delay) in milliseconds from CSS duration strings
 */
export const parseMaxTotalMs = (durStr: string, delayStr: string) => {
  const durs = (durStr || '').split(',').map((s) => parseMs(s));
  const delays = (delayStr || '').split(',').map((s) => parseMs(s));

  let max = 0;
  const count = Math.max(durs.length, delays.length);
  for (let i = 0; i < count; i++) {
    const dur = durs[i % durs.length] || 0;
    const delay = delays[i % delays.length] || 0;
    if (dur + delay > max) {
      max = dur + delay;
    }
  }
  return max;
};

/**
 * Listens for animation/transition events or waits for max computed CSS duration
 * before executing the close callback (e.g. element.close() or element.hidePopover()).
 */
export const supportClosingAnimation = $(
  (
    el: HTMLElement,
    closeCallback: (el: HTMLElement) => void,
    closingClass = 'closing'
  ) => {
    return new Promise<void>((resolve) => {
      el.dataset.closing = '';
      if (closingClass) {
        el.classList.add(closingClass);
      }

      // Force browser style recalculation so closing animation styles register
      void el.offsetHeight;

      const styles = getComputedStyle(el);
      const maxAnimMs = parseMaxTotalMs(styles.animationDuration, styles.animationDelay);
      const maxTransMs = parseMaxTotalMs(styles.transitionDuration, styles.transitionDelay);
      const maxDurationMs = Math.max(maxAnimMs, maxTransMs);

      if (maxDurationMs > 0) {
        let cleanedUp = false;
        const cleanup = () => {
          if (cleanedUp) return;
          cleanedUp = true;
          delete el.dataset.closing;
          if (closingClass) {
            el.classList.remove(closingClass);
          }
          try {
            closeCallback(el);
          } catch {}
          resolve();
        };

        const handleEvent = (e: Event) => {
          if (e.target === el) {
            const transEvent = e as TransitionEvent;
            // Only trigger cleanup on animationend or when transitionend belongs to visual styles (opacity/transform/all)
            if (
              e.type === 'animationend' ||
              !transEvent.propertyName ||
              transEvent.propertyName === 'opacity' ||
              transEvent.propertyName === 'transform' ||
              transEvent.propertyName === 'all'
            ) {
              el.removeEventListener('animationend', handleEvent);
              el.removeEventListener('transitionend', handleEvent);
              cleanup();
            }
          }
        };

        el.addEventListener('animationend', handleEvent);
        el.addEventListener('transitionend', handleEvent);

        // Safety fallback timeout to resolve at maxDurationMs
        setTimeout(cleanup, maxDurationMs + 20);
      } else {
        delete el.dataset.closing;
        if (closingClass) {
          el.classList.remove(closingClass);
        }
        try {
          closeCallback(el);
        } catch {}
        resolve();
      }
    });
  }
);
