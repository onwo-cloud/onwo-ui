import type { JSXChildren } from '@builder.io/qwik';
import { Icons } from '@onwo/icons';
import { Tabs, cn, PageNavigation as PNav } from '@onwo/ui';

type ShowcaseProps = {
  title: string;
  component: JSXChildren;
  code?: string;
  disabled?: boolean;
};

export const Showcase = (props: ShowcaseProps) => (
  <Tabs class="mt-16">
    <div class="flex justify-between w-full">
      <PNav.Link label={props.title} id={props.title.toLowerCase().split(' ').join('-')}>
        <h2 class="text-onwo-24 font-semibold">{props.title}</h2>
      </PNav.Link>
      {!!props.code && (
        <Tabs.List class="flex p-1 bg-gohan rounded-onwo-s-md gap-1 w-fit justify-left">
          <Tabs.Pill>
            <Icons.ControlsEye />
            <span>Preview</span>
          </Tabs.Pill>
          <Tabs.Pill disabled={props.disabled}>
            <Icons.SoftwareCode />
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
      <Tabs.Panel class={cn('bg-gohan p-4 rounded-onwo-s-sm', props.disabled && 'brightness-30')}>
        <div class={cn('w-full h-full', props.disabled && 'blur-xs')}>{props.component}</div>
      </Tabs.Panel>
      {!!props.code && (
        <Tabs.Panel class="theme-onwo-dark p-4 rounded-onwo-s-sm text-bulma bg-gohan">
          <pre>
            <code>{props.code}</code>
          </pre>
        </Tabs.Panel>
      )}
    </Tabs.Panels>
  </Tabs>
);
