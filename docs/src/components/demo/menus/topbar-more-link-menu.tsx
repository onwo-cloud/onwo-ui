import { component$, Slot } from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';
import { MenuPopup, MenuRoot } from '~ui/@kit/menu';

export const TopbarMoreLinkMenu = component$((props: OwPropsOf<'div'>) => (
  <MenuRoot {...props}>
    <Slot name="trigger" />
    <MenuPopup side="bottom" sideOffset={8}>
      <div role="group" class="flex flex-col p-1 w-40">
        <Slot name="links" />
      </div>
    </MenuPopup>
  </MenuRoot>
));
