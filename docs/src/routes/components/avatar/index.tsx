import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Avatar" breadcrumbs={[{ label: 'avatar', url: '/components/avatar' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Avatar - Onwo UI',
  description:
    'Customizable avatar components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
