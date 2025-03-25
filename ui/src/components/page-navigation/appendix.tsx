import { $ } from '@builder.io/qwik';
import { PageNavigation } from '~/primitives';
import type { NavigationElement } from '~/primitives/page-navigation/provider';
import { cn } from '~/utils/cn';

type AppendixProps = {
  class?: string;
};

export const Appendix = (props: AppendixProps) => (
  <PageNavigation.Appendix
    class={cn(' overflow-y-auto sticky', props.class)}
    render$={$((elements: NavigationElement[]) => (
      <div class="sticky flex flex-col gap-4">
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
