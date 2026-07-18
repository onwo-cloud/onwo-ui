import type { OwPropsOf } from '~primitives/index';

export const PageNavItem = ({ children, ...props }: OwPropsOf<'div'>) => (
  <div
    role="listitem"
    {...props}
    style={{ listStyleType: 'none', ...props.style }}
  >
    {children}
  </div>
);
