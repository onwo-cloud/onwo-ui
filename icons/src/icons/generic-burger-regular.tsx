import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-burger-regular" {...props} viewBox="0 0 32 32">
    <path
      d="M7.5 9.5H24.5M7.5 21.5H24.5M7.5 15.5H24.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
