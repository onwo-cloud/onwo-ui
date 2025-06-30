import type { ClassList } from '@builder.io/qwik';
import { $ } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import type { NavigationElement } from '@onwo/primitives/page-navigation';
import { Appendix as PAppendix } from '@onwo/primitives/page-navigation';

type AppendixProps = {
  class?: ClassList;
  contentClass?: ClassList;
  // When set will only display links above the specified level.
  maxLevelShown?: number;
  sticky?: boolean;
};

export const Appendix = (props: AppendixProps) => (
  <PAppendix
    maxLevelShown={props.maxLevelShown}
    class={cn('h-full', props.class)}
    render$={$((elements: NavigationElement[]) => (
      <div class={cn('flex flex-col gap-4', props.sticky && 'sticky top-0', props.contentClass)}>
        <p class="text-onwo-10-caption font-semibold uppercase text-ink">On this page</p>
        <ul class="flex text-lead flex-col gap-1">
          {elements.map((elem) => (
            <li key={elem.id}>
              <a class="text-onwo-14 transition-colors hover:underline" href={`#${elem.id}`}>
                {elem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    ))}
  />
);
