import { $, useOnWindow, useSignal, useVisibleTask$ } from '@qwik.dev/core';

// Custom hook for window width tracking
export const useWindowWidth = () => {
  const windowWidth = useSignal<number | undefined>();

  useOnWindow(
    'resize',
    $(() => {
      windowWidth.value = window.innerWidth;
    }),
  );

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    windowWidth.value = window.innerWidth;
  });

  return windowWidth;
};
