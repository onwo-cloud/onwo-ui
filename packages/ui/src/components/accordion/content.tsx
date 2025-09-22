import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Content } from '@onwo/primitives/accordion';
import type { As, WithAsProps } from '~/utils/as';

export const AccordionContent = <T extends As = 'div'>(
  props: WithAsProps<PropsOf<typeof Content>, T>,
) => (
  <Content
    {...(props as any)}
    class={cn('pb-4 overflow-hidden text-sm data-[state=closed]:hidden', props.class)}
  />
);
