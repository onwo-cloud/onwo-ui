import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-bottom-left" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5005 6.5L6.50781 25.5M6.50781 25.5H16.7366M6.50781 25.5L6.50781 15.2712"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
