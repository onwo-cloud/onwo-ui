import { Slot, component$, createContextId, useContextProvider, useStore } from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';

export type NavigationElement = {
  label: string;
  id: string;
  level: number; // default to -1 if not provided
};

type PageNavigationContextData = {
  elemPos: number;
  elements: Record<number, NavigationElement>;
};

export const PageNavigationContext =
  createContextId<PageNavigationContextData>('page-navigation-context');

export type PageNavigationProviderProps = Primitive<'div'>;

export const usePageNavigationProvider = (): PageNavigationContextData => {
  const data: PageNavigationContextData = useStore({
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
