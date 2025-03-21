import type { QwikIntrinsicElements } from '@builder.io/qwik';
import {
  Slot,
  component$,
  createContextId,
  useContext,
  useContextProvider,
  useStore,
  useTask$,
} from '@builder.io/qwik';

export type PageNavigationProviderProps = QwikIntrinsicElements['div'];

type NavigationElement = {
  label: string;
  id: string;
};

type PageNavigationContext = {
  elemPos: number;
  elements: Record<number, NavigationElement>;
};

export const PageNavigationContext = createContextId<PageNavigationContext>('tabs-context-1');

export const usePageNavigationProvider = (): PageNavigationContext => {
  const data: PageNavigationContext = useStore({
    elemPos: 0,
    elements: {},
  });

  console.info('defining context');
  useContextProvider(PageNavigationContext, data);

  return data;
};

export const PageNavigationProvider = component$((props: PageNavigationProviderProps) => {
  usePageNavigationProvider();
  console.info('defining context');

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});

export type PageLinkProps = Omit<QwikIntrinsicElements['a'], 'id' | 'children'> & {
  label: string;
  id: string;
};

export const PageLink = component$((props: PageLinkProps) => {
  const context = useContext(PageNavigationContext);

  useTask$(() => {
    const pos = context.elemPos++;
    if (context.elements == undefined) {
      console.info(context);
      console.error('using page link outside of a context');
    } else {
      context.elements[pos] = { label: props.label ?? props.label, id: props.id };
    }
  });

  return (
    <a {...props}>
      <Slot />
    </a>
  );
});

export const PageNavigation = component$(() => {
  const data = useContext(PageNavigationContext);

  return (
    <aside class="shrink-0 w-96 pt-14 px-3 bg-goku overflow-y-auto hidden sticky xl:block">
      <nav class="sticky flex flex-col gap-4" aria-label="Page navigation">
        <p class="text-onwo-10-caption font-semibold uppercase text-bulma">On this page</p>
        <ul class="flex text-trunks flex-col gap-1">
          {Object.entries(data.elements)
            .sort((a, b) => a[0].localeCompare(b[0]))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([_, elem]) => (
              <li key={elem.id}>
                <a class="text-onwo-14 transition-colors hover:underline" href={`#${elem.id}`}>
                  {elem.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
});
