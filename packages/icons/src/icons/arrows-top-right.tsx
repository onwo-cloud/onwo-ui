import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-top-right" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 25.5L25.4927 6.5M25.4927 6.5H15.2639M25.4927 6.5L25.4928 16.7288"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
