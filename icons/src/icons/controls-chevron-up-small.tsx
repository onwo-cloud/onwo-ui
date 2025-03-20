import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-chevron-up-small" {...props} viewBox="0 0 32 32">
    <path
      d="M10 19L16 13L22 19"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
