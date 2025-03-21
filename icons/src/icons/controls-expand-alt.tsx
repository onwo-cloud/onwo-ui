import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-expand-alt" {...props} viewBox="0 0 32 32">
    <path
      d="M20 19.9927L6.5 6.50005M6.5 6.50005V14.7288M6.5 6.50005L14.7288 6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.5 19.5V23.5C6.5 24.6046 7.39543 25.5 8.5 25.5H23.5C24.6046 25.5 25.5 24.6046 25.5 23.5V8.5C25.5 7.39543 24.6046 6.5 23.5 6.5H19.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
