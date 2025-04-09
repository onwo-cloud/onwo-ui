import { Tabs } from '~/primitives';
import { cn } from '~/utils/cn';

export type PillProps<Name extends string> = Tabs.TabProps<Name>;

export const Pill = <Name extends string>({ class: className, ...props }: PillProps<Name>) => (
  <Tabs.Tab
    class={cn(
      'relative flex text-bulma cursor-pointer transition-colors items-center justify-center font-semibold rounded-onwo-i-sm gap-1 focus:outline-none focus:shadow-focus data-selected:bg-goku text-onwo-14 hover:bg-goku',
      /* disabled */
      'disabled:text-trunks',
      /* sizing */
      'px-3 py-2 group-[[data--size=sm]]/tablist:px-2 group-[[data--size=sm]]/tablist:py-1',
      className,
    )}
    {...props}
  >
    {props.children}
  </Tabs.Tab>
);
