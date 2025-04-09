import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-close" {...props} viewBox="0 0 32 32">
    <path
      d="M7 7L16 16M16 16L7 25M16 16L25 25M16 16L25 7"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
