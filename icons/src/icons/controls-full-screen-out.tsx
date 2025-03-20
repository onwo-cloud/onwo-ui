import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-full-screen-out" {...props} viewBox="0 0 32 32">
    <path
      d="M13.2727 6V13.2727H6M13.2727 26V18.7273H6M18.7273 6V13.2727H26M18.7273 26V18.7273H26"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
