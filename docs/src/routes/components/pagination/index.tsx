import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { primitives as P } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default component$(() => {
  const selectedPage = useSignal(1);
  const totalPages = useSignal(10);

  return (
    <div>
      <PageHeadSection
        title="Pagination"
        breadcrumbs={[{ label: 'Pagination', to: '/components/pagination' }]}
      />

      <div class="onwo-format"></div>

      <Anatomy
        variants={{
          Default: ``,
        }}
      />

      <Showcase
        title="Default"
        component={
          <P.Pagination
            selectedPage={selectedPage.value}
            totalPages={totalPages.value}
            onPageChange$={(page: number) => {
              selectedPage.value = page;
            }}
            class="pagination-wrapper"
            selectedClass="pagination-selected-btn"
            defaultClass="pagination-btn"
            dividerClass="pagination-divider"
            prevButtonClass="prevNextButtons"
            nextButtonClass="prevNextButtons"
          />
        }
        code={``}
      />
    </div>
  );
});

export const head: DocumentHead = buildHead({
  title: 'Pagination - Onwo UI',
  description:
    'Customizable pagination components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
