import { Slot, component$ } from '@builder.io/qwik';
import { ToastItemContext } from './context';

export const ToastClose = component$(() => {
  const { dismiss$ } = ToastItemContext.use();

  return (
    <button
      class="absolute top-2 right-2 text-graphite w-[20px] h-[20px] flex items-center justify-center rounded-sm hover:bg-parchment"
      onClick$={dismiss$}
    >
      <Slot />
    </button>
  );
});
