import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-right-short" {...props} viewBox="0 0 32 32">
    <path
      d="M10 16.0037L22.0001 16.0037M22.0001 16.0037L16.6164 21.3892M22.0001 16.0037L16.6164 10.6181"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
