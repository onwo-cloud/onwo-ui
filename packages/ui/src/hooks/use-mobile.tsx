import { useSignal, useTask$ } from '@qwik.dev/core';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const isMobile = useSignal<boolean | undefined>();

  useTask$(() => {
    const mql = globalThis.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
    };
    mql.addEventListener('change', onChange);
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
    return () => mql.removeEventListener('change', onChange);
  });

  return !!isMobile;
}
