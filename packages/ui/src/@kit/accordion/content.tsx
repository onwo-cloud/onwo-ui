import { Content } from '@onwo/primitives/accordion';
import { OwPropsOf } from '~primitives/index';

export const AccordionContent = (props: OwPropsOf<typeof Content>) => (
  <Content
    {...(props as any)}
    class={['pb-4 overflow-hidden text-sm data-[state=closed]:hidden', props.class]}
  />
);
