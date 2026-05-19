import { $, useSignal } from '@builder.io/qwik';

export function usePopover(customId?: string) {
  const programmaticRef = useSignal<HTMLElement | null>(null);

  const initPopover$ = $(() => {
    if (programmaticRef.value === null) {
      programmaticRef.value = document.getElementById(`${customId}-panel`);
    }
    return programmaticRef.value;
  });

  const showPopover = $(async () => {
    const el = await initPopover$();
    el?.showPopover();
  });

  const togglePopover = $(async () => {
    const el = await initPopover$();
    el?.togglePopover();
  });

  const hidePopover = $(async () => {
    const el = await initPopover$();
    el?.hidePopover();
  });

  return {
    showPopover,
    togglePopover,
    hidePopover,
    initPopover$,
  };
}
