import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BackdropOverlay, Button } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default component$(() => {
  const visible = useSignal<boolean>(false);

  return (
    <div>
      <PageHeadSection
        title="Backdrop overlay"
        description="Display a full page backrop overlay conditionally"
        breadcrumbs={[{ label: 'Backdrop Overlay', to: '/components/backdrop-overlay' }]}
      />

      <p>
        Contrary to html standards, by defaults buttons type will be `button` even if it's used
        inside a form. Make sure to set the type to submit when needed
      </p>
      <Anatomy
        variants={{
          Default: `import { BackdropOverlay } from '@onwo/ui';

const opened = useSignal<boolean>(false);
<BackdropOverlay bind:open={opened} />`,
        }}
      />

      <Showcase
        title="Default"
        component={
          <div class="relative flex justify-center">
            <BackdropOverlay bind:open={visible} />
            <Button onClick$={$(() => (visible.value = true))}>Show overlay</Button>
          </div>
        }
        code={`const opened = useSignal<boolean>(false);

<Button onClick$={$(() => (visible.value = true))}>Show overlay</Button>
<BackdropOverlay bind:open={opened} />`}
      />
    </div>
  );
});

export const head: DocumentHead = buildHead({
  title: 'Button - Onwo UI',
  description:
    'Customizable button components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
