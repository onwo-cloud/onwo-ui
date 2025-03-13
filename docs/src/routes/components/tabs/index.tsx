import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Tabs" breadcrumbs={[{ label: 'tabs', url: '/components/tabs' }]} />
    <h1 class="text-onwo-32">Hello</h1>
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Tabs - Onwo UI',
  description:
    'Customizable tabs components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
