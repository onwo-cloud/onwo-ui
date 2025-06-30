import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Trigger as PTrigger } from '@onwo/primitives/accordion';
import { SvgIcon } from '@onwo/primitives/svg-icon';

export const Trigger = ({ children, class: className, ...props }: PropsOf<typeof PTrigger>) => {
  return (
    <PTrigger
      class={cn(
        'flex flex-1 w-full items-center justify-between py-4 text-sm font-medium transition-all outline-none focus-visible:underline hover:underline text-left [&[data-state=opened]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <SvgIcon class="transition-transform" viewBox="0 0 32 32">
        <path
          d="M25 11.5L16 20.5L7 11.5"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </SvgIcon>
    </PTrigger>
  );
};
