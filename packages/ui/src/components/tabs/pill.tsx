import { Tabs, cn } from '@onwo/primitives';

export type PillProps<Name extends string> = Tabs.TabProps<Name>;

export const Pill = <Name extends string>({ class: className, ...props }: PillProps<Name>) => (
  <Tabs.Tab
    class={cn(
      'relative flex text-lead data-selected:text-ink cursor-pointer transition-colors items-center justify-center font-semibold rounded-onwo-i-xs gap-1 outline-none focus-visible:shadow-focus data-selected:ring data-selected:ring-line data-selected:bg-paper text-onwo-14 hover:text-ink hover:bg-paper',
      /* disabled */
      'disabled:text-graphite',
      /* sizing */
      'px-3 py-2 group-[[data--size=sm]]/tablist:px-2 group-[[data--size=sm]]/tablist:py-1',
      className,
    )}
    {...props}
  >
    {props.children}
  </Tabs.Tab>
);
