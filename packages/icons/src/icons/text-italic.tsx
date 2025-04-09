import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-italic" {...props} viewBox="0 0 32 32">
    <path
      d="M8.00006 25H20.3637M11.6363 7H23.9999M13.8182 25L17.8182 7"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
