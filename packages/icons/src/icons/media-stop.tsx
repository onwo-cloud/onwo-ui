import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-stop" {...props} viewBox="0 0 32 32">
    <rect x="7" y="7" width="18" height="18" rx="4" stroke="currentColor" />
  </SvgIcon>
);
