import type { PropsOf } from '@builder.io/qwik';
import { Accordion } from '@onwo/primitives';
import type { As, WithAsProps } from '~/utils/as';
import { cn } from '~/utils/cn';

export const Content = <T extends As = 'div'>(
  props: WithAsProps<PropsOf<typeof Accordion.Content>, T>,
) => (
  <Accordion.Content
    {...(props as any)}
    class={cn('pb-4 overflow-hidden text-sm data-[state=closed]:hidden', props.class)}
  />
);
