import type { QwikHTMLElements } from '@builder.io/qwik';
import { Slot, component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';

export type NavigationElement = {
  label: string;
  id: string;
  level: number; // default to -1 if not provided
};

type PageNavigationContext = {
  elemPos: number;
  elements: Record<number, NavigationElement>;
};

export const PageNavigationContext = createContextId<PageNavigationContext>('tabs-context-1');

export type PageNavigationProviderProps = QwikHTMLElements['div'];

export const usePageNavigationProvider = (): PageNavigationContext => {
  const data: PageNavigationContext = useStore({
    elemPos: 0,
    elements: {},
  });

  useContextProvider(PageNavigationContext, data);

  return data;
};

export const Provider = component$((props: PageNavigationProviderProps) => {
  usePageNavigationProvider();

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
