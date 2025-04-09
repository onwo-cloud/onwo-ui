import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-close-small" {...props} viewBox="0 0 32 32">
    <path
      d="M10 10L16 16M16 16L10 22M16 16L22 22M16 16L22 10"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
