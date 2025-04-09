import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-top-left" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 25.5L6.5 6.50731M6.5 6.50731V16.7361M6.5 6.50731L16.7288 6.50726"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
