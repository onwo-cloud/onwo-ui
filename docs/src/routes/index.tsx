import type { DocumentHead } from '@builder.io/qwik-city';

import { buildHead } from '../utils/build-head';
import { Sidebar } from '~/components/sidebar';
import { Topbar } from '~/components/topbar';
import { HomeContent } from '~/pages/home/main-content';

export default () => (
  <div class="flex h-screen">
    <Sidebar class="fixed" />
    <div class="flex flex-col w-full h-full ml-56">
      <Topbar />
      <HomeContent />
    </div>
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - homepage',
  description: '',
  shareImage: '/share.png',
});
