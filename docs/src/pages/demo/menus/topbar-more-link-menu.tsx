import { component$, PropsOf, Slot } from '@qwik.dev/core';
import { MenuPopup, MenuRoot } from '~ui/@kit/menu';

export const TopbarMoreLinkMenu = component$((props: PropsOf<'div'>) => (
  <MenuRoot {...props}>
    <Slot name="trigger" />
    <MenuPopup side="bottom" sideOffset={8}>
      <div role="group" class="flex flex-col p-1 w-40">
        <Slot name="links" />
      </div>
    </MenuPopup>
  </MenuRoot>
));
