import type { Signal } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { ChevronDownIcon, SwatchBookIcon } from '@onwo/icons';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuPanel, Tabs, TabsTab } from '@onwo/ui';
import { BORDER_CLASSES } from '.';

type DropdownButtonProps = {
  isOpen: Signal<boolean>;
};

const ThemeDropdownButton = ({ isOpen }: DropdownButtonProps) => {
  return (
    <div
      class={`flex items-center justify-between w-full px-4 py-2 text-left bg-transparent border-none outline-none text-gray-900 disabled:cursor-not-allowed focus:ring-[#3b82f6] focus:ring-2 hover:ring-[#a3a3a3] focus:hover:ring-[#3b82f6] ${BORDER_CLASSES}`}
      aria-label="Choose theme"
      aria-describedby="dropdown-instructions"
    >
      <span class="flex-1 text-gray-500">
        <div class="flex items-center gap-2">
          <SwatchBookIcon size="sm" />
          <span>Select theme</span>
        </div>
      </span>
      <ChevronDownIcon
        size="sm"
        class={`transition-transform duration-200 ${isOpen.value ? 'rotate-180' : ''}`}
      />
    </div>
  );
};

export const ThemeDropdown = component$(() => {
  const isOpen = useSignal(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ThemeDropdownButton isOpen={isOpen} />
      </DropdownMenuTrigger>
      <DropdownMenuPanel>
        <Tabs>
          <TabsTab>Hey</TabsTab>
        </Tabs>
      </DropdownMenuPanel>
    </DropdownMenu>
  );
});
