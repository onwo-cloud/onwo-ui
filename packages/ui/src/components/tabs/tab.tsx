import { Tabs, cn, styledcn } from '@onwo/primitives';

export type TabProps<Name extends string> = Tabs.TabProps<Name>;

export const Tab = styledcn(Tabs.Tab)`
      relative flex cursor-pointer items-center justify-center outline-none focus-visible:shadow-focus font-semibold gap-2 rounded-sm data-selected:text-accent text-onwo-14 hover:text-accent

      ${/* disabled */ ''}
      disabled:text-lead
      ${/* underline */ ''}
      after:scale-x-0 after:absolute after:transition-transform after:content-[""] after:scale-y-100 after:duration-300 after:left-0 after:bottom-0 after:w-full after:h-[2px] after:origin-top-left after:bg-accent data-selected:after:scale-x-100 after:hover:scale-100 after:hover:origin-top-left
      ${/* sizing */ ''}
      px-3 py-2 group-[[data--size=sm]]/tablist:px-2 group-[[data--size=sm]]/tablist:py-1
`;
