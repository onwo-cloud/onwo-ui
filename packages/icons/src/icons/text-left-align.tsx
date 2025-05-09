import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-left-align" {...props} viewBox="0 0 32 32">
    <path
      d="M7 25H16M7 19H25M7 7H25M7 13H16"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
