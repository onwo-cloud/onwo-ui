import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-menu" {...props} viewBox="0 0 32 32">
    <path d="M7.5 11.5H24.5M7.5 19.5H24.5" stroke="currentColor" stroke-linecap="round" />
  </SvgIcon>
);
