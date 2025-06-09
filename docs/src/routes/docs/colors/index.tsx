import type { DocumentHead } from '@builder.io/qwik-city';
import { ColorPage } from '~/pages/colors';
import { buildHead } from '~/utils/build-head';

export default () => <ColorPage />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - colors',
  description: '',
  shareImage: '/share.png',
});
