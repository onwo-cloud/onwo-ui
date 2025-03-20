import type { DocumentHead } from '@builder.io/qwik-city';
import { HomePage } from '../pages/home';
import { buildHead } from '../utils/build-head';

export default () => <HomePage />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - homepage',
  description: '',
  shareImage: '/share.png',
});
