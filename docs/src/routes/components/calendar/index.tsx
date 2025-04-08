import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Calendar } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default component$(() => {
  const vdefault = useSignal<Date | undefined>();
  const vtimemodule = useSignal<Date | undefined>();

  return (
    <div>
      <PageHeadSection
        title="Calendar"
        description="Display a Calendar component"
        breadcrumbs={[{ label: 'Calendar', to: '/components/calendar' }]}
      />

      <div class="onwo-format"></div>

      <Anatomy
        variants={{
          Default: `import { Calendar } from '@onwo/ui';

const calValue = useSignal<Date | undefined>();
<Calendar bind:value={calValue} />`,
        }}
      />

      <Showcase
        title="Default"
        component={
          <div class="w-full flex justify-center">
            <Calendar bind:value={vdefault} />
          </div>
        }
        code={`<Calendar bind:value={calValue} />`}
      />

      <Showcase
        title="With time module"
        experimental
        component={
          <div class="w-full flex justify-center">
            <Calendar mode="date-and-time" bind:value={vtimemodule} />
          </div>
        }
        code={`<Calendar mode="date-and-time" bind:value={calValue} />`}
      />
    </div>
  );
});

export const head: DocumentHead = buildHead({
  title: 'Calendar - Onwo UI',
  description:
    'Customizable snackbar components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
