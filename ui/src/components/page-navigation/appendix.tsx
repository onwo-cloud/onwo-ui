import { $ } from '@builder.io/qwik';
import { PageNavigation } from '~/primitives';
import type { NavigationElement } from '~/primitives/page-navigation/provider';
import { cn } from '~/utils/cn';

type AppendixProps = {
  class?: string;
  // When set will only display links above the specified level.
  maxLevelShown?: number;
  sticky?: boolean;
};

export const Appendix = (props: AppendixProps) => (
  <PageNavigation.Appendix
    maxLevelShown={props.maxLevelShown}
    class={cn('h-full', props.class)}
    render$={$((elements: NavigationElement[]) => (
      <div class={cn('flex flex-col gap-4', props.sticky && 'sticky top-0')}>
        <p class="text-onwo-10-caption font-semibold uppercase text-bulma">On this page</p>
        <ul class="flex text-trunks flex-col gap-1">
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
