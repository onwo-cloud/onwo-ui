import { PropsOf } from '@qwik.dev/core';
import { MenuPopup, MenuRoot, MenuItem } from '~ui/@kit/menu';

export const VersionMenu = (props: PropsOf<'div'>) => (
  <MenuRoot {...props}>
    {props.children}
    <MenuPopup side="bottom" sideOffset={8}>
      <div role="group" class="p-1">
        <MenuItem class="group gap-2 cursor-pointer hover:bg-black/5 p-2 rounded">Beta</MenuItem>
        <MenuItem class="group gap-2 cursor-pointer hover:bg-black/5 p-2 rounded">Alpha</MenuItem>
      </div>
    </MenuPopup>
  </MenuRoot>
);
