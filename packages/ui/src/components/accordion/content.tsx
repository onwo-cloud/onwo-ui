import { Accordion } from '~/primitives';
import type { ContentProps } from '~/primitives/accordion/content';
import type { As, WithAsProps } from '~/utils/as';
import { cn } from '~/utils/cn';

export const Content = <T extends As = 'div'>(props: WithAsProps<ContentProps, T>) => (
  <Accordion.Content
    {...(props as WithAsProps<ContentProps>)}
    class={cn('pb-4 overflow-hidden text-sm data-[state=closed]:hidden', props.class)}
  />
);
