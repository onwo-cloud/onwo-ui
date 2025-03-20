import type { DocumentHead } from '@builder.io/qwik-city';
import { GettingStartedPage } from '~/pages/getting-started';
import { buildHead } from '~/utils/build-head';

export default () => <GettingStartedPage />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - getting started',
  description: '',
  shareImage: '/share.png',
});
