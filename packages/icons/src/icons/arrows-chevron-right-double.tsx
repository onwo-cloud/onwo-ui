import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-chevron-right-double" {...props} viewBox="0 0 32 32">
    <path
      d="M16 6.5L25.5 16L16 25.5M6.5 6.5L16 16L6.5 25.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
