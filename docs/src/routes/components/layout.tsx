
import { Slot, component$ } from '@qwik.dev/core';
import { Sidebar } from '~/components/sidebar';

export default component$(() => (
  <div class="flex min-h-screen bg-[#FDFDFD]">
    <Sidebar class="fixed top-0 left-0 w-[224px] h-screen" />
    <div class="flex flex-col flex-1 pl-[224px] min-h-screen">
      <Slot />
    </div>
  </div>
));
