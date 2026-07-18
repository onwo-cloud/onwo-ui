import type { QRL, Signal } from '@qwik.dev/core';
import { $, Slot, component$, useOnDocument, useTask$, useComputed$ } from '@qwik.dev/core';
import { isServer } from '@qwik.dev/core/build';
import type { OwPropsOf } from '~primitives/utils/as';
import { useFloating } from '../floating';
import { usePopoverContext } from './context';
import type { PositionProps } from './popover-types';
import { closePopover, showPopover } from './utils/popover-utils';
import { toFloatingOptions } from './utils/to-floating-options';
import { useOutsideClick } from '~primitives/hooks/use-outside-click';

export type PopoverPanelProps = OwPropsOf<'div'> &
  PositionProps & {
    'bind:override'?: Signal<boolean>;
    onShow$?: QRL<(el: HTMLElement) => void>;
  };

export const PopoverPanel = component$((props: PopoverPanelProps) => {
  const context = usePopoverContext();
  const panelRef = context.control.panelRef;
  const triggerRef = context.control.triggerRef;
  const opened = context.control.opened;

  const {
    'bind:override': override,
    onShow$,
    placement,
    gutter,
    flip,
    shift,
    hide,
    strategy,
    side,
    align,
    alignment,
    sideOffset,
    collisionAvoidance,
    collisionPadding,
    edgeOffset,
    positionMethod,
    followCursor,
    onKeyDown$,
    class: className,
    ...restProps
  } = props;

  const isActive = useComputed$(() => override?.value ?? opened.value);
  const floatingOptions = toFloatingOptions(props);

  // 1. Lifecycle Task: Show/Hide native popover in DOM
  useTask$(async ({ track }) => {
    const active = track(() => isActive.value);
    const el = track(() => panelRef.value);

    if (isServer || !el) return;

    if (active) {
      await showPopover(el);
      if (onShow$) {
        await onShow$(el);
      }
    } else {
      await closePopover(el);
    }
  });

  // 2. Floating Positioner Hook: Pass isActive signal so autoUpdate only listens while open
  const { updatePosition } = useFloating(triggerRef, panelRef, floatingOptions, isActive);

  // 3. Global Escape key handling
  useOnDocument(
    'keydown',
    $((e: Event) => {
      const keyEvent = e as KeyboardEvent;

      if (keyEvent.key === 'Escape' && isActive.value) {
        context.control.hide$();
        context.control.triggerRef.value?.focus();
      }
    })
  );

  useOutsideClick(
    panelRef,
    $((e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && context.control.triggerRef.value?.contains(target)) return;

      if (opened.value) {
        context.control.hide$();
      }
    })
  );

  return (
    <div
      popover="manual"
      ref={panelRef}
      id={`${context.id}-panel`}
      data-open={isActive.value ? '' : undefined}
      data-closed={!isActive.value ? '' : undefined}
      class={[
        'max-w-none border-0 outline-none m-0 p-0 overflow-auto inset-auto top-0 left-0 fixed w-max',
        className,
      ]}
      onKeyDown$={[
        $((e: KeyboardEvent) => {
          if (e.key === 'Escape') {
            context.control.hide$();
            context.control.triggerRef.value?.focus();
          }
        }),
        onKeyDown$,
      ]}
      {...restProps}
    >
      <Slot />
    </div>
  );
});
