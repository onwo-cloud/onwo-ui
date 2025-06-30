import type { DocumentHead } from '@builder.io/qwik-city';
import { HomePageV2 } from '../pages/home-v2';
import { buildHead } from '../utils/build-head';

export default () => <HomePageV2 />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - homepage',
  description: '',
  shareImage: '/share.png',
});
