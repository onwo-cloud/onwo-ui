import { $, useOnWindow, useSignal, useVisibleTask$ } from '@builder.io/qwik';

// Custom hook for window width tracking
export const useWindowWidth = () => {
  const windowWidth = useSignal(0);

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
