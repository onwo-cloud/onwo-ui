import { component$, Slot } from '@qwik.dev/core';

// Generic Pill Container
export const PillControls = component$(() => {
  return (
    <div class="bg-canvas-secondary p-1 rounded-full absolute top-3 left-3 flex gap-1 shadow-sm ring-1 ring-inset ring-separator/40 z-10 select-none">
      <Slot />
    </div>
  );
});

// Generic Pill Button
interface PillButtonProps {
  title?: string;
  disabled?: boolean;
  onClick$?: any;
  active?: boolean;
}

export const PillButton = component$<PillButtonProps>((props) => {
  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick$={props.onClick$}
      class={`relative inline-flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-80 outline-none border-none ${
        props.disabled
          ? 'text-ink opacity-40 cursor-not-allowed'
          : props.active
          ? 'text-accent bg-canvas-hover cursor-pointer'
          : 'text-ink-secondary hover:text-ink hover:bg-canvas-hover cursor-pointer'
      }`}
      title={props.title}
    >
      <Slot />
    </button>
  );
});
