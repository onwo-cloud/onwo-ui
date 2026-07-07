import {
  component$,
  Slot,
  useSignal,
  useId,
  useContextProvider,
  $,
  sync$,
  type Signal,
  type PropsOf,
  useOnDocument,
} from '@qwik.dev/core';

import { CollapsibleContext } from './collapsible-context';

export interface CollapsibleProps extends PropsOf<'div'> {
  isExpanded?: Signal<boolean>;
}

// Synchronously stops the browser from doing anything with the Escape key
export const collapsibleKeyDownSync = sync$((e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    e.preventDefault();
  }
});

export const Collapsible = component$<CollapsibleProps>(
  ({ isExpanded: externalExpanded, ...props }) => {
    const internalExpanded = useSignal(false);
    const isExpanded = externalExpanded || internalExpanded;

    const uniqueId = useId();
    const rootId = `${uniqueId}-collapsible-root`;
    const contentId = `${uniqueId}-collapsible-content`;
    const rootRef = useSignal<HTMLElement>();

    useContextProvider(CollapsibleContext, { isExpanded, contentId });

    const handleFocusOut = $((e: FocusEvent) => {
      const target = e.relatedTarget as HTMLElement | null;
      if (target && !target.closest(`#${rootId}`)) {
        isExpanded.value = false;
      }
    });

    const handleKeyDown = $((e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded.value) {
        isExpanded.value = false;
        const trigger = rootRef.value?.querySelector('button[aria-controls]') as HTMLElement;
        trigger?.focus();
      }
    });

    useOnDocument(
      'click',
      $((e: MouseEvent) => {
        const target = e.target as HTMLElement | null;
        if (target && !target.closest(`#${rootId}`)) {
          isExpanded.value = false;
        }
      }),
    );

    return (
      <div
        ref={rootRef}
        id={rootId}
        onFocusOut$={handleFocusOut}
        onKeyDown$={[collapsibleKeyDownSync, handleKeyDown]}
        data-state={isExpanded.value ? 'open' : 'closed'}
        {...props}
      >
        <Slot />
      </div>
    );
  },
);
