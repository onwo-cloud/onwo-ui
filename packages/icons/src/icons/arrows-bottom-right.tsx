import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-bottom-right" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 6.49988L25.5 25.4926M25.5 25.4926V15.2638M25.5 25.4926H15.2712"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
