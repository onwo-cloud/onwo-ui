import { Slot, component$ } from '@builder.io/qwik';
import { PageNavigation, PageNavigationProvider } from '~/commons/page-navigation';

export default component$(() => (
  <PageNavigationProvider class="flex gap-24">
    <div class="w-full min-w-0">
      <Slot />
    </div>
    <PageNavigation />
  </PageNavigationProvider>
));
