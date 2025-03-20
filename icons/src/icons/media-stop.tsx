import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <rect x="7" y="7" width="18" height="18" rx="4" stroke="currentColor" />
  </SvgIcon>
);
