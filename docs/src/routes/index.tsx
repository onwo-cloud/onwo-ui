import type { DocumentHead } from '@builder.io/qwik-city';
import { HomePage } from '../pages/home';
import { buildHead } from '../utils/build-head';

export default () => <HomePage />;

export const head: DocumentHead = buildHead({
  title: 'onwo design system',
  description:
    'My personal blog, where I talk about the technology I love, explore new areas and share my programming knowledge.',
  shareImage: '/share.png',
});
