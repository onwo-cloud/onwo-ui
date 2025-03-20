import type { DocumentHead } from '@builder.io/qwik-city';
import { PrimitivesPage } from '~/pages/primitives';
import { buildHead } from '../../utils/build-head';

export default () => <PrimitivesPage />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - primitives',
  description: '',
  shareImage: '/share.png',
});
