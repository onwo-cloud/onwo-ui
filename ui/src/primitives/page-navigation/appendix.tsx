import type { JSXOutput, QRL } from '@builder.io/qwik';
import { component$, useComputed$, useContext } from '@builder.io/qwik';
import type { NavigationElement } from './provider';
import { PageNavigationContext } from './provider';

type AppendixProps = {
  class?: string;
  render$: QRL<(entries: NavigationElement[]) => JSXOutput>;
};

const useOrderedAppendixEntries = () => {
  const data = useContext(PageNavigationContext);
  return useComputed$(() => {
    return Object.entries(data.elements)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map((a) => a[1]);
  });
};

export const Appendix = component$((props: AppendixProps) => {
  const entries = useOrderedAppendixEntries();

  return (
    <aside class={props.class} aria-label="Page navigation appendix">
      <nav class="contents" aria-label="Page navigation">
        {props.render$(entries.value)}
      </nav>
    </aside>
  );
});
