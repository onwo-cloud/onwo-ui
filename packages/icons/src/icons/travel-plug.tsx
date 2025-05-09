import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="travel-plug" {...props} viewBox="0 0 32 32">
    <path
      d="M16 26V20.84M11.9375 6V11.3533M20.0625 6V11.3533M12.75 20.84H19.25C20.112 20.84 20.9386 20.5 21.5481 19.8949C22.1576 19.2898 22.5 18.4691 22.5 17.6133V11.3533H9.5V17.6133C9.5 18.4691 9.8424 19.2898 10.4519 19.8949C11.0614 20.5 11.888 20.84 12.75 20.84Z"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
  </SvgIcon>
);
