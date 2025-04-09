import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-pause" {...props} viewBox="0 0 32 32">
    <rect x="19" y="6" width="6.5" height="20" rx="2" stroke="currentColor" />
    <rect x="6.5" y="6" width="6.5" height="20" rx="2" stroke="currentColor" />
  </SvgIcon>
);
