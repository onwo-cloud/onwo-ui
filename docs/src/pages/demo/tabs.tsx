import { PropsOf } from '@qwik.dev/core';
import { Button } from '~primitives/@kit/button';

export const TabsRoot = (props: PropsOf<'div'>) => (
  <div class="flex overflow-clip items-center h-full -mx-3" {...props}>
    {props.children}
  </div>
);

export const TabItem = ({ start: Start, ...props }: { value: string; start?: any; text: string; active?: boolean }) => (
  <Button
    as="div"
    class={[
      'select-none flex items-center h-full min-w-0 px-3 relative cursor-pointer group',
      props.active ? 'justify-start' : 'gap-0.75',
    ]}
  >
    {Start && <Start />}
    <div
      class={[
        "text-[14px] font-['Geist',system-ui,sans-serif] line-clamp-1 transition-colors",
        props.active
          ? 'leading-[142.857%] font-medium text-[#404040]'
          : 'leading-[100%] text-[#5D5D5DFC] group-hover:text-[#404040]',
      ]}
    >
      {props.text}
    </div>
    {/* Classic horizontal line tab indicator stuck safely to the bottom of the flex container */}
    <div
      class={[
        'absolute bottom-0 inset-x-3 h-[2px] bg-[#404040] transition-opacity',
        props.active ? 'opacity-100' : 'opacity-0',
      ]}
    />
  </Button>
);
