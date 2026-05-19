import type { DocumentHead } from '@builder.io/qwik-city';

import { ThemeBuilder } from '~/components/theme-builder';
import { buildHead } from '~/utils/build-head';

export default () => <ThemeBuilder class="w-full" />;

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - theme builder',
  description: '',
  shareImage: '/share.png',
});
