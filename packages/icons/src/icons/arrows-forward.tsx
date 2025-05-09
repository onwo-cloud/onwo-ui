import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-forward" {...props} viewBox="0 0 32 32">
    <path
      d="M13.0535 8L7 14.0535L13.0535 20.107M17.9765 8L11.923 14.0535L17.9765 20.107M12.923 14H19.7926C22.4672 14 24.6354 16.1682 24.6354 18.8428V23.6856"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
