import { QRL, Signal, useComputed$, useId, useSignal, useTask$ } from '@builder.io/qwik';
import { initContext } from '~primitives/index';

export type MenuContextData = {
  isOpen: Signal<boolean>;
  triggerRef: Signal<HTMLElement | undefined>; // Added this
  registerItem: QRL<(id: string, node: HTMLElement) => void>;
  unregisterItem: QRL<(id: string) => void>;
  activeIndex: Signal<number>;
  itemIds: Signal<string[]>;
  closeAll: QRL<() => void>;
  isSubmenu: boolean;
  parentContext?: MenuContextData;
};

export const MenuContext = initContext<MenuContextData>('menu');

export const useMenuAndRegisterItem = () => {
  const id = useId();
  const ctx = MenuContext.use();
  const itemRef = useSignal<HTMLDivElement>();

  useTask$(({ track, cleanup }) => {
    const ref = track(() => itemRef.value);
    if (!ref) return;
    ctx.registerItem(id, ref);
    cleanup(() => ctx.unregisterItem(id));
  });

  const isActive = useComputed$(() => {
    const index = ctx.itemIds.value.indexOf(id) ?? -1;
    return index === ctx.activeIndex.value;
  });

  return { ctx, id, itemRef, isActive };
};
