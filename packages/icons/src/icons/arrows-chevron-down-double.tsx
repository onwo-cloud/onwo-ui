import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-chevron-down-double" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 16L16 25.5L6.5 16M25.5 6.5L16 16L6.5 6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
