import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-diagonals-bltr" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 15.2675V6.5L16.7308 6.5M25.4964 6.50002L15.9982 16L6.5 25.5M15.2692 25.4963H6.5V16.7288"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
