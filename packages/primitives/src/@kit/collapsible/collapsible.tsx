
import {
  component$,
  Slot,
  useSignal,
  useId,
  useContextProvider,
  $,
  sync$,
  useVisibleTask$,
  type Signal,
  type PropsOf
} from '@builder.io/qwik';
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

export const Collapsible = component$<CollapsibleProps>(({
  isExpanded: externalExpanded,
  ...props
}) => {
  const internalExpanded = useSignal(false);
  const isExpanded = externalExpanded || internalExpanded;
  const contentId = `${useId()}-collapsible-content`;
  const rootRef = useSignal<HTMLElement>();

  useContextProvider(CollapsibleContext, { isExpanded, contentId });

  const handleFocusOut = $((e: FocusEvent) => {
    const target = e.relatedTarget as Node | null;
    if (rootRef.value && !rootRef.value.contains(target)) {
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

  useVisibleTask$(({ cleanup, track }) => {
    const expanded = track(() => isExpanded.value);
    if (!expanded) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (rootRef.value && !rootRef.value.contains(e.target as Node)) {
        isExpanded.value = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    cleanup(() => document.removeEventListener('click', handleClickOutside));
  });

  return (
    <div
      ref={rootRef}
      onFocusOut$={handleFocusOut}
      onKeyDown$={[collapsibleKeyDownSync, handleKeyDown]}
      data-state={isExpanded.value ? 'open' : 'closed'}
      {...props}
    >
      <Slot />
    </div>
  );
});
