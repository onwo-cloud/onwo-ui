import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Accordion"
      breadcrumbs={[{ label: 'accordion', url: '/components/accordion' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Accordion - Onwo UI',
  description:
    'Customizable accordion components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
