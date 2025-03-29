import type { DocumentHead } from '@builder.io/qwik-city';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Breadcrumb"
      description="Easy hierarchical navigation"
      breadcrumbs={[{ label: 'Breadcrumb', url: '/components/breadcrumb' }]}
    />

    <div class="onwo-format">
      <p>
        Breadcrumb navigation assists users in recognizing their position within a website
        hierarchy, by offering a trail of breadcrumbs leading back to the homepage.
      </p>
    </div>

    <Anatomy
      variants={{
        Default: ``,
      }}
    />

    <Showcase title="Default" component={<div />} code={``} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Breadcrumb - Onwo UI',
  description:
    'Customizable breadcrumb components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
