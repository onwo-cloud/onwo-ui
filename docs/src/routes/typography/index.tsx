import type { DocumentHead } from '@builder.io/qwik-city';
import { TypographyPage } from '../../pages/typography';
import { buildHead } from '../../utils/build-head';

export default () => <TypographyPage />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - typography',
  description: '',
  shareImage: '/share.png',
});
