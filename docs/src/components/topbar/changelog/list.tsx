import {
  component$,
  Slot,
  useSignal,
  createContextId,
  useContextProvider,
  useContext,
  $,
  sync$,
  type Signal,
  type PropsOf,
  CSSProperties,
} from '@qwik.dev/core';

export interface ListContextState {
  staggerBase: Signal<number>;
  staggerStep: Signal<number>;
  activeIndex: Signal<number>;
}

export const ListContext = createContextId<ListContextState>('list.context');

export interface ListProps extends PropsOf<'div'> {
  staggerBase?: number;
  staggerStep?: number;
  activeIndex?: Signal<number>;
  disabled?: boolean;
}

// Synchronously prevents Arrow keys from scrolling the page
export const listKeyDownSync = sync$((e: KeyboardEvent) => {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
  }
});

export const List = component$<ListProps>(
  ({
    staggerBase = 40,
    staggerStep = 30,
    activeIndex: externalActiveIndex,
    disabled = false,
    ...props
  }) => {
    const listRef = useSignal<HTMLElement>();
    const internalActiveIndex = useSignal(0);
    const activeIndex = externalActiveIndex || internalActiveIndex;

    useContextProvider(ListContext, {
      staggerBase: useSignal(staggerBase),
      staggerStep: useSignal(staggerStep),
      activeIndex,
    });

    const handleKeyDown = $((e: KeyboardEvent) => {
      if (disabled) return;

      const list = listRef.value;
      if (!list) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const items = Array.from(list.querySelectorAll('[data-list-item]')) as HTMLElement[];
        if (items.length === 0) return;

        let nextIndex = activeIndex.value;

        if (e.key === 'ArrowDown') {
          nextIndex = activeIndex.value < items.length - 1 ? activeIndex.value + 1 : 0;
        } else if (e.key === 'ArrowUp') {
          nextIndex = activeIndex.value > 0 ? activeIndex.value - 1 : items.length - 1;
        }

        activeIndex.value = nextIndex;

        requestAnimationFrame(() => {
          items[nextIndex]?.focus();
        });
      }
    });

    return (
      <div ref={listRef} onKeyDown$={[listKeyDownSync, handleKeyDown]} {...props}>
        <Slot />
      </div>
    );
  },
);

export type ListItemProps = Omit<PropsOf<'div'>, 'style'> & {
  index: number;
  style?: CSSProperties;
}

export const ListItem = component$<ListItemProps>(({ index, ...props }) => {
  const ctx = useContext(ListContext);

  const handlePointerEnter = $(() => {
    ctx.activeIndex.value = index;
  });

  return (
    <div
      onPointerEnter$={handlePointerEnter}
      style={{
        '--stagger': `${index * ctx.staggerStep.value + ctx.staggerBase.value}ms`,
        ...props.style,
      }}
      {...props}
    >
      <Slot />
    </div>
  );
});
