import { Tabs } from '@onwo/primitives';
import { cn } from '~/utils/cn';

export type TabProps<Name extends string> = Tabs.TabProps<Name>;

export const Tab = <Name extends string>({ class: className, ...props }: TabProps<Name>) => (
  <Tabs.Tab
    class={cn(
      'relative flex cursor-pointer items-center justify-center focus:outline-none focus:shadow-focus font-semibold gap-2 data-selected:text-piccolo text-onwo-14 hover:text-piccolo ',
      /* disabled */
      'disabled:text-trunks',
      /* underline */
      'after:scale-x-0 after:absolute after:transition-transform after:content-[""] after:scale-y-100 after:duration-300 after:left-0 after:bottom-0 after:w-full after:h-[2px] after:origin-top-left after:bg-piccolo data-selected:after:scale-x-100 after:hover:scale-100 after:hover:origin-top-left',
      /* sizing */
      'px-3 py-2 group-[[data--size=sm]]/tablist:px-2 group-[[data--size=sm]]/tablist:py-1',
      className,
    )}
    {...props}
  >
    {props.children}
  </Tabs.Tab>
);
