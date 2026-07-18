import { $, useConstant, useSignal } from '@qwik.dev/core';

export function useIsPressed() {
  const isPressed = useSignal(false);
  const handles = useConstant({
    onPointerDown$: $(() => { isPressed.value = true; }),
    onPointerUp$: $(() => { isPressed.value = false; }),
    onPointerLeave$: $(() => { isPressed.value = false; }),
  });
  return { isPressed, handles };
}

