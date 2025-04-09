import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-left-short" {...props} viewBox="0 0 32 32">
    <path
      d="M22 16.0037L9.99994 16.0037M9.99994 16.0037L15.3836 21.3892M9.99994 16.0037L15.3836 10.6181"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
