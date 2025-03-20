import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 12.5V6.5H12.5M6.5 19.5V25.5H12.5M25.5 12.5V6.5H19.5M25.5 19.5V25.5H19.5"
      stroke="currentColor"
    />
  </SvgIcon>
);
