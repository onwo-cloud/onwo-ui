import type { JSXChildren } from '@builder.io/qwik';
import { Tabs, cn, PageNavigation as PNav } from '@onwo/ui';

type ShowcaseProps = {
  title: string;
  component: JSXChildren;
  experimental?: boolean;
  code?: string;
  disabled?: boolean;
};

export const Showcase = (props: ShowcaseProps) => (
  <Tabs.Root class="mt-16">
    <div class="flex justify-between w-full">
      <div class="flex gap-2 items-center">
        {props.experimental && (
          <div class="uppercase flex px-1 py-0.5 bg-warn text-forced-b select-none tracking-[1px] items-center font-semibold rounded-onwo-i-xs gap-1 text-onwo-9 h-4">
            WIP
          </div>
        )}

        <PNav.Link label={props.title} id={props.title.toLowerCase().split(' ').join('-')}>
          <h2 class="text-onwo-24 font-semibold">{props.title}</h2>
        </PNav.Link>
      </div>
      {!!props.code && (
        <Tabs.List
          size="sm"
          class="flex p-1 bg-parchment rounded-onwo-s-xs gap-1 w-fit justify-left"
        >
          <Tabs.Pill>
            <span>Preview</span>
          </Tabs.Pill>
          <Tabs.Pill disabled={props.disabled}>
            <span>Code</span>
          </Tabs.Pill>
        </Tabs.List>
      )}
    </div>
    <Tabs.Panels class="relative flex text-onwo-14 w-full">
      {props.disabled && (
        <div class=" absolute text-onwo-16 text-[white] z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          work in progress
        </div>
      )}
      <Tabs.Panel
        class={cn('bg-parchment p-4 rounded-onwo-s-sm', props.disabled && 'brightness-30')}
      >
        <div class={cn('w-full h-full', props.disabled && 'blur-xs')}>{props.component}</div>
      </Tabs.Panel>
      {!!props.code && (
        <Tabs.Panel class="theme-onwo-dark p-4 rounded-onwo-s-sm text-ink bg-parchment">
          <pre>
            <code>{props.code}</code>
          </pre>
        </Tabs.Panel>
      )}
    </Tabs.Panels>
  </Tabs.Root>
);
