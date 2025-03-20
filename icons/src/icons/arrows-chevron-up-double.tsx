import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 16L16 6.5L25.5 16M6.5 25.5L16 16L25.5 25.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
