import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-globe" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5M25.5 16C25.5 10.7533 21.2467 6.5 16 6.5M25.5 16H6.5M16 25.5C10.7533 25.5 6.5 21.2467 6.5 16M16 25.5V6.5M16 25.5C18.9148 25.5 21.2778 21.2467 21.2778 16M16 25.5C13.0852 25.5 10.7222 21.2467 10.7222 16M6.5 16C6.5 10.7533 10.7533 6.5 16 6.5M16 6.5C13.0852 6.5 10.7222 10.7533 10.7222 16M16 6.5C18.9148 6.5 21.2778 10.7533 21.2778 16M21.2778 16H10.7222"
      stroke="currentColor"
    />
  </SvgIcon>
);
