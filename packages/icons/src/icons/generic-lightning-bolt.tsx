import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-lightning-bolt" {...props} viewBox="0 0 32 32">
    <path
      d="M14.6957 18.6746L11.2174 29L25 14.2376H17.1304L20.7826 3L6 18.6746H11.9565"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
