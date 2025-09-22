import type { ClassList, JSXOutput, QRL } from '@builder.io/qwik';
import { component$, useComputed$, useContext } from '@builder.io/qwik';
import type { NavigationElement } from './provider';
import { PageNavigationContext } from './provider';

export type AppendixProps = {
  class?: ClassList;
  // When set will only display links above the specified level.
  maxLevelShown?: number;
  render$: QRL<(entries: NavigationElement[]) => JSXOutput>;
};

export const useOrderedAppendixEntries = (maxLevelShown = -1) => {
  const data = useContext(PageNavigationContext);
  return useComputed$(() => {
    return Object.entries(data.elements)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map((a) => a[1])
      .filter((a) => maxLevelShown === -1 || a.level <= maxLevelShown);
  });
};

export const Appendix = component$((props: AppendixProps) => {
  const entries = useOrderedAppendixEntries(props.maxLevelShown);

  return (
    <aside class={props.class} aria-label="Page navigation appendix">
      <nav class="contents" aria-label="Page navigation">
        {props.render$(entries.value)}
      </nav>
    </aside>
  );
});
