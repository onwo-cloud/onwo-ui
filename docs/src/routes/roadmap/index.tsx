import type { DocumentHead } from '@builder.io/qwik-city';
import { RoadmapPage } from '../../pages/roadmap';
import { buildHead } from '../../utils/build-head';

export default () => <RoadmapPage />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - roadmap',
  description: '',
  shareImage: '/share.png',
});
