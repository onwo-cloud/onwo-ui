import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-diagonals-tlbr" {...props} viewBox="0 0 32 32">
    <path
      d="M15.2675 6.5L6.5 6.5L6.5 15.2692M6.50002 6.50365L25.5 25.5M25.4963 16.7308L25.4963 25.5H16.7288"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
