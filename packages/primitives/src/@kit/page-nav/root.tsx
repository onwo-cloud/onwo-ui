import { Slot, $, useOn, component$, useSignal } from '@qwik.dev/core';
import type { QRL, Signal } from '@qwik.dev/core';
import type { OwPropsOf } from '~primitives/utils/as';
import { PageNavContext } from './use-page-nav-context';

export type PageNavRootProps = OwPropsOf<'nav'> & {
  value?: Signal<string>;
  onSelected$?: QRL<(newValue: string) => void>;
  defaultValue?: string;
  selectOnFocus?: boolean;
};

export const PageNavRoot = component$<PageNavRootProps>(({
  value,
  defaultValue,
  selectOnFocus,
  onSelected$,
  ...props
}) => {
  const ctx = PageNavContext.useProvider({
    value,
    defaultValue,
    onSelected$,
    activationMode: selectOnFocus ? 'automatic' : 'manual',
  });

  const navRef = useSignal<Element>();

  useOn(
    'keydown',
    $((e: KeyboardEvent) => {
      const container = navRef.value;
      if (!container) return;

      const target = e.target as HTMLElement;
      // Change: Filter by our custom nav item attribute
      if (!target || !target.hasAttribute('data-page-nav-item')) return;

      // Handle Enter and Space to select the link or trigger the menu
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        target.click();
        return;
      }

      // Change: Query all navigable items (both links and menus)
      const links = Array.from(
        container.querySelectorAll<HTMLElement>('[data-page-nav-item]:not([disabled])')
      );
      const currentIndex = links.indexOf(target);
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % links.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        nextIndex = (currentIndex - 1 + links.length) % links.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = links.length - 1;
      } else {
        return;
      }

      e.preventDefault();
      const nextLink = links[nextIndex];

      if (ctx.activationMode === 'automatic') {
        // Change: We only want to auto-select (auto-click) if it's a link.
        // We shouldn't auto-open a dropdown menu on arrow focus.
        if (nextLink.getAttribute('data-page-nav-item') === 'link') {
          nextLink.click();
        }

        // Defer focus slightly so Qwik's reactive render cycle completes first
        setTimeout(() => {
          nextLink.focus();
        }, 0);
      } else {
        nextLink.focus();
      }
    })
  );

  return (
    <nav
      ref={navRef}
      id={ctx.name}
      {...props}
    >
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, height: '100%', width: '100%' }}>
        <Slot />
      </ul>
    </nav>
  );
});
