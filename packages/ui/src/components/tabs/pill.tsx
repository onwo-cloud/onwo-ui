import { Tabs, cn } from '@onwo/primitives';

export type PillProps<Name extends string> = Tabs.TabProps<Name>;

export const Pill = <Name extends string>({ class: className, ...props }: PillProps<Name>) => (
  <Tabs.Tab
    class={cn(
      'relative flex text-ink cursor-pointer transition-colors items-center justify-center font-semibold rounded-onwo-i-sm gap-1 outline-none focus-visible:shadow-focus data-selected:bg-paper text-onwo-14 hover:bg-paper',
      /* disabled */
      'disabled:text-lead',
      /* sizing */
      'px-3 py-2 group-[[data--size=sm]]/tablist:px-2 group-[[data--size=sm]]/tablist:py-1',
      className,
    )}
    {...props}
  >
    {props.children}
  </Tabs.Tab>
);
