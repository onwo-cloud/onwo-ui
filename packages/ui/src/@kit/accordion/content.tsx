import { Content, type ContentProps } from '@onwo/primitives/accordion';

export const AccordionContent = (props: ContentProps) => (
  <Content
    {...(props as any)}
    class={['pb-4 overflow-hidden text-sm data-[state=closed]:hidden', props.class]}
  />
);
