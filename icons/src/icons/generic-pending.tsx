import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-pending" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7533 25.5 16Z"
      stroke="currentColor"
    />
    <path
      d="M12.7997 16H12.1997M16.1864 16C15.7508 16 15.5865 16 15.5865 16M19.7999 16H19.2"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
