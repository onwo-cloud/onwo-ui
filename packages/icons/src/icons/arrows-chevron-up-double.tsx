import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-chevron-up-double" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 16L16 6.5L25.5 16M6.5 25.5L16 16L25.5 25.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
