import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="sport-squash" {...props} viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="9.5" stroke="currentColor" stroke-miterlimit="10" />
    <circle cx="15" cy="12" r="1.5" stroke="currentColor" stroke-miterlimit="10" />
    <circle cx="19.3496" cy="14.25" r="1.5" stroke="currentColor" stroke-miterlimit="10" />
  </SvgIcon>
);
