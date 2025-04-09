import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-full-screen" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 12.5V6.5H12.5M6.5 19.5V25.5H12.5M25.5 12.5V6.5H19.5M25.5 19.5V25.5H19.5"
      stroke="currentColor"
    />
  </SvgIcon>
);
