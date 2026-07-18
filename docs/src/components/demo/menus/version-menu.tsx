import { OwPropsOf } from '~primitives/index';
import { MenuPopup, MenuRoot, MenuItem } from '~ui/@kit/menu';

export const VersionMenu = ({children, ...props}: OwPropsOf<'div'>) => (
  <MenuRoot {...props}>
    {children}
    <MenuPopup side="bottom" sideOffset={8}>
      <div role="group" class="p-1">
        <MenuItem class="group gap-2 cursor-pointer p-2 rounded">Beta</MenuItem>
        <MenuItem class="group gap-2 cursor-pointer p-2 rounded">Alpha</MenuItem>
      </div>
    </MenuPopup>
  </MenuRoot>
);
