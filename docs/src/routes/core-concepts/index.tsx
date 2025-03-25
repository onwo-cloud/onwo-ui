import type { DocumentHead } from '@builder.io/qwik-city';
import { CoreConceptsPage } from '~/pages/core-concepts';
import { buildHead } from '../../utils/build-head';

export default () => <CoreConceptsPage />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - Core concepts',
  description: '',
  shareImage: '/share.png',
});
