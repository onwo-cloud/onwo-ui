import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Form" breadcrumbs={[{ label: 'Form', url: '/components/form' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Form - Onwo UI',
  description:
    'Customizable form components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
