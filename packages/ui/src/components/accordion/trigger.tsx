import { Accordion, SvgIcon } from '~/primitives';
import type { TriggerProps } from '~/primitives/accordion/trigger';
import { cn } from '~/utils/cn';

export const Trigger = ({ children, class: className, ...props }: TriggerProps) => {
  return (
    <Accordion.Trigger
      class={cn(
        'flex flex-1 w-full items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=opened]>svg]:rotate-180',
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
    </Accordion.Trigger>
  );
};

//
