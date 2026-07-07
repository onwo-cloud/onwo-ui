import { useComputed$ } from '@qwik.dev/core';

import { useWindowWidth } from './use-window-width';

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const width = useWindowWidth();

  return useComputed$(() => {
    if (width.value === undefined) return;
    return width.value > MOBILE_BREAKPOINT;
  });
}
