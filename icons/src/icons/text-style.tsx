import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-style" {...props} viewBox="0 0 32 32">
    <path
      d="M16 25.5V7.29167M6.5 6.5L25.5 6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
