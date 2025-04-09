import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-center" {...props} viewBox="0 0 32 32">
    <path
      d="M25 19H7M25 7H7M20.9091 25H11.9091M20.9091 13H11.9091"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
