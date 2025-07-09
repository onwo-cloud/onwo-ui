import { $, component$, useSignal } from '@builder.io/qwik';
import { Animated } from '@onwo/primitives/animated';
import { Button } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const simpleAnimated: BoxedComp = {
  title: 'Simple',
  height: 82,
  display: component$(() => {
    const visibleBox = useSignal<boolean>(true);
    return (
      <div class="flex flex-col items-center gap-8 h-56">
        <Button
          class="w-fit"
          variant="outline"
          onClick$={$(() => {
            visibleBox.value = !visibleBox.value;
          })}
        >
          {visibleBox.value ? 'Unmount' : 'mount'}
        </Button>
        <Animated
          bind:visible={visibleBox}
          in={{ timing: 'ease-in', opacity: 0, slide: { x: '-5rem' } }}
          out={{ timing: 'ease-in', opacity: 0, slide: { x: '5rem' } }}
          class="w-fit"
        >
          <div class="border border-blue-500 bg-blue-50 p-4 rounded-xl shadow-lg w-72 animate-fade-in">
            <div class="flex items-start gap-3">
              <svg class="w-5 h-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 3a1 1 0 10-2 0v1a1 1 0 002 0v-1zm-1-8a1 1 0 00-.993.883L9 6v4a1 1 0 001.993.117L11 10V6a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <div class="text-sm text-blue-900">
                <p class="font-semibold">Heads up!</p>
                <p>This is a temporary informational message with style and purpose.</p>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    );
  }),
  code: `const visibleBox = useSignal<boolean>(true);
<Animated
  bind:visible={visibleBox}
  in={{ timing: 'ease-in', opacity: 0, slide: { x: '-5rem' } }}
  out={{ timing: 'ease-in', opacity: 0, slide: { x: '5rem' } }}
  class="w-fit"
>
  <div class="bg-[#28b66e] w-32 h-32" />
</Animated>`,
};

const infiniteAnimated: BoxedComp = {
  title: 'Infinite',
  height: 82,
  display: () => (
    <div class="flex justify-center">
      <Animated
        in={{
          timing: { custom: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' },
          iterationCount: 'infinite',
          durationMs: 2000,
          slide: { x: '200px', y: '0px' },
          scale: 1.2,
          rotate: 360,
        }}
        class="w-fit"
      >
        <div class="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg" />
      </Animated>
    </div>
  ),
  code: `<Animated
  in={{
    timingFunction: 'linear',
    iterationCount: 'infinite',
    durationMs: 3000,
    rotate: 360,
  }}
  class="w-fit"
>
  <OtherSmileIcon size="3rem" />
</Animated>`,
};

export const section: Section = {
  title: 'Animated',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/animated',
  description: 'Animation with unmount watcher',
  components: [simpleAnimated, infiniteAnimated],
};
