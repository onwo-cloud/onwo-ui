import { component$, useVisibleTask$, Slot, useSignal } from '@qwik.dev/core';
import { createHtmlGraph } from '~/lib/copy-to-html';

export const ExportGraph = component$(() => {
  const ref = useSignal<HTMLDivElement>();
  useVisibleTask$(({ track }) => {
    const elem = track(() => ref.value);
    if (!elem) return;
    const graph = createHtmlGraph(elem, { preserveVars: true });
    (globalThis as any).__HTML_GRAPH = graph;
  }, { strategy: 'document-ready' });

  return (
    <div ref={ref}>
      <Slot />
    </div>
  );
});
