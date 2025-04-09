import { Accordion } from '~/primitives';
import type { ItemProps } from '~/primitives/accordion/item';

export const Item = (props: ItemProps) => {
  return (
    <Accordion.Item class="border-b border-beerus" {...props}>
      {props.children}
    </Accordion.Item>
  );
};
