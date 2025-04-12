import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Icons } from '@onwo/icons';
import { Animated } from '@onwo/primitives';
import { Button } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default component$(() => {
  const visibleBox = useSignal<boolean>(true);

  return (
    <div>
      <PageHeadSection
        title="Animated"
        description="Animation with unmount watcher"
        breadcrumbs={[{ label: 'Animated', to: '/components/accordion' }]}
      />

      <div class="onwo-format">
        <p>
          Animated can be used to manage animations. One of its key benefits is that it ensures
          animations are completed before the component is unmounted.
        </p>
      </div>

      <Anatomy
        variants={{
          Default: `import { Animated } from '@onwo/primitives';

<Animated>
</Animated>
`,
        }}
      />

      <Showcase
        title="Simple"
        component={
          <div class="flex flex-col items-center gap-8 h-56">
            <Button
              class="w-fit"
              onClick$={$(() => {
                visibleBox.value = !visibleBox.value;
              })}
            >
              Animate {visibleBox.value ? 'out' : 'in'}
            </Button>
            <Animated
              bind:visible={visibleBox}
              in={{ timing: 'ease-in', opacity: 0, slide: { x: '-5rem' } }}
              out={{ timing: 'ease-in', opacity: 0, slide: { x: '5rem' } }}
              class="w-fit"
            >
              <div class="bg-cell w-32 h-32" />
            </Animated>
          </div>
        }
        code={`const visibleBox = useSignal<boolean>(true);

<Animated
  bind:visible={visibleBox}
  in={{ timing: 'ease-in', opacity: 0, slide: { x: '-5rem' } }}
  out={{ timing: 'ease-in', opacity: 0, slide: { x: '5rem' } }}
  class="w-fit"
>
  <div class="bg-cell w-32 h-32" />
</Animated>`}
      />

      <Showcase
        title="Infinite"
        component={
          <div class="flex justify-center">
            <Animated
              in={{
                timingFunction: 'linear',
                iterationCount: 'infinite',
                durationMs: 3000,
                rotate: 360,
              }}
              class="w-fit"
            >
              <Icons.OtherSmile size="3rem" />
            </Animated>
          </div>
        }
        code={`<Animated
  in={{
    timingFunction: 'linear',
    iterationCount: 'infinite',
    durationMs: 3000,
    rotate: 360,
  }}
  class="w-fit"
>
  <Icons.OtherSmile size="3rem" />
</Animated>`}
      />
    </div>
  );
});

export const head: DocumentHead = buildHead({
  title: 'Animated. - Onwo UI',
  description:
    'Customizable accordion components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
