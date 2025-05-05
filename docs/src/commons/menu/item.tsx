import { JSXChildren, QwikIntrinsicElements } from "@builder.io/qwik";

type ItemProps = QwikIntrinsicElements['a'] & {
  label: string;
  href?: string;
  onSelect$?: () => void;
  children: JSXChildren;
};

export const Item = ({ label, href = '#', onSelect$, children, ...aProps }: ItemProps) => (
  <li role="none">
    <a
      role="menuitem"
      href={href}
      tabIndex={0}
      onClick$={() => {
        if (onSelect$) onSelect$();
      }}
      class="block px-4 py-2 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700"
      {...aProps}
    >
      {children}
    </a>
  </li>
);
