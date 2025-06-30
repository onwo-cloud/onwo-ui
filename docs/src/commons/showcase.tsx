import type { JSXChildren } from '@builder.io/qwik';
import { PageNavigationLink, Tabs, cn, TabsList, TabsPill, TabsPanels, TabsPanel } from '@onwo/ui';

type ShowcaseProps = {
  title: string;
  component: JSXChildren;
  experimental?: boolean;
  code?: string;
  disabled?: boolean;
};

export const Showcase = (props: ShowcaseProps) => (
  <Tabs class="mt-16">
    <div class="flex justify-between w-full">
      <div class="flex gap-2 items-center">
        {props.experimental && (
          <div class="uppercase flex px-1 py-0.5 bg-warn text-forced-b select-none tracking-[1px] items-center font-semibold rounded-onwo-i-xs gap-1 text-onwo-9 h-4">
            WIP
          </div>
        )}

        <PageNavigationLink label={props.title} id={props.title.toLowerCase().split(' ').join('-')}>
          <h2 class="text-onwo-24 font-semibold">{props.title}</h2>
        </PageNavigationLink>
      </div>
      {!!props.code && (
        <TabsList
          size="sm"
          class="flex p-1 bg-parchment rounded-onwo-s-xs gap-1 w-fit justify-left"
        >
          <TabsPill>
            <span>Preview</span>
          </TabsPill>
          <TabsPill disabled={props.disabled}>
            <span>Code</span>
          </TabsPill>
        </TabsList>
      )}
    </div>
    <TabsPanels class="relative flex text-onwo-14 w-full">
      {props.disabled && (
        <div class=" absolute text-onwo-16 text-[white] z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          work in progress
        </div>
      )}
      <TabsPanel
        class={cn('bg-parchment p-4 rounded-onwo-s-sm', props.disabled && 'brightness-30')}
      >
        <div class={cn('w-full h-full', props.disabled && 'blur-xs')}>{props.component}</div>
      </TabsPanel>
      {!!props.code && (
        <TabsPanel class="theme-onwo-dark p-4 rounded-onwo-s-sm text-ink bg-parchment">
          <pre>
            <code>{props.code}</code>
          </pre>
        </TabsPanel>
      )}
    </TabsPanels>
  </Tabs>
);
