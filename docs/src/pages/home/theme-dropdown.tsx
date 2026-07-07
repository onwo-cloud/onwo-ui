import type { Signal } from '@qwik.dev/core';
import { component$ } from '@qwik.dev/core';
import { Icon } from '~/utils/icon'

type DropdownButtonProps = {
  isOpen: Signal<boolean>;
};

const _ThemeDropdownButton = ({ isOpen }: DropdownButtonProps) => {
  return (
    <div
      class={`flex items-center justify-between w-full px-4 py-2 text-left bg-transparent border-none outline-none text-blue-900 disabled:cursor-not-allowed focus:ring-[blue] focus:ring-2 hover:ring-[blue] focus:hover:ring-[blue] ring-1 rounded-lg`}
      aria-label="Choose theme"
      aria-describedby="dropdown-instructions"
    >
      <span class="flex-1 text-blue-500">
        <div class="flex items-center gap-2">
          <Icon i="swatch-book"  size="sm"  />
          <span>Select theme</span>
        </div>
      </span>
      <Icon i="chevron-down" 
        size="sm"
        class={`transition-transform duration-200 ${isOpen.value ? 'rotate-180' : ''}`}
       />
    </div>
  );
};

export const ThemeDropdown = component$(() => {
  

  return <></>;
});
