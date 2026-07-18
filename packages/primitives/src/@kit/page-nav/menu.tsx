import { MenuRoot, MenuTrigger, MenuPopup } from '~primitives/@kit/menu';
import { OwPropsOf } from '~primitives/utils/as';

export const PageNavMenu = ({ style, children, ...props }: OwPropsOf<typeof MenuRoot>) => (
  <MenuRoot style={{ listStyleType: 'none', display: 'flex', ...style }} {...props}>
    {children}
  </MenuRoot>
);

export const PageNavMenuTrigger = ({ children, ...props }: OwPropsOf<typeof MenuTrigger>) => (
  <MenuTrigger {...props} tabIndex={0} data-page-nav-item="menu">
    {children}
  </MenuTrigger>
);

export const PageNavMenuPopup = ({ children, ...props }: OwPropsOf<typeof MenuPopup>) => (
  <MenuPopup {...props}>
    {children}
  </MenuPopup>
);
