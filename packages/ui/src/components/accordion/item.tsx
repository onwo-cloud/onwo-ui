import type { PropsOf } from '@builder.io/qwik';
import { Item as PItem } from '@onwo/primitives/accordion';

export const Item = (props: PropsOf<typeof PItem>) => {
  return (
    <PItem class="border-b border-line" {...props}>
      {props.children}
    </PItem>
  );
};
