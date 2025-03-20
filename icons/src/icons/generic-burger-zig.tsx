import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-burger-zig" {...props} viewBox="0 0 32 32">
    <path
      d="M13.5 9.5H25.5M6.5 21.5H18.5M6.5 15.5H25.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
