import { type JSXChildren, type QwikIntrinsicElements } from '@builder.io/qwik';

type GroupProps = QwikIntrinsicElements['li'] & {
  label: string;
  href?: string;
  onSelect$?: () => void;
  children: JSXChildren;
};

export const Group = ({ label, onSelect$, children, ...props }: GroupProps) => (
  <li {...props}>
    <button
      id="radix-:re:-trigger-radix-:rf:"
      data-state="closed"
      aria-expanded="false"
      aria-controls="radix-:re:-content-radix-:rf:"
      class="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-scan focus:bg-scan focus:outline-none disabled:pointer-events-none disabled:opacity-50 group"
      data-radix-collection-item=""
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-down relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </button>
  </li>
);

//  <li role="none">
//    <a
//      role="menuitem"
//      href={href}
//      tabIndex={0}
//      onClick$={() => {
//        if (onSelect$) onSelect$();
//      }}
//      class="block px-4 py-2 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700"
//      {...aProps}
//    >
//      {children}
//    </a>
//  </li>
