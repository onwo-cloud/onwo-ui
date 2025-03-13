import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Popover" breadcrumbs={[{ label: 'popover', url: '/components/popover' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Popover - Onwo UI',
  description:
    'Customizable popover components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
