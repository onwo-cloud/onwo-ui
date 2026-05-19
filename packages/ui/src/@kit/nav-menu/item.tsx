import type { QRL, QwikIntrinsicElements } from '@builder.io/qwik';
import { $ } from '@builder.io/qwik';

export type NavMenuItemProps = {
  label: string;
  href?: string;
  onSelect$?: QRL<() => void>;
} & QwikIntrinsicElements['a'];

export const NavMenuItem = ({ label, href, onSelect$, children, ...props }: NavMenuItemProps) => (
  <li role="none">
    <a
      role="menuitem"
      href={href ?? '#'}
      tabIndex={0}
      onClick$={$(() => {
        if (onSelect$) onSelect$();
      })}
      class="block px-4 py-2 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700"
      {...props}
    >
      {label}
    </a>
  </li>
);
