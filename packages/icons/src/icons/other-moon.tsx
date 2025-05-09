import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="other-moon" {...props} viewBox="0 0 32 32">
    <path
      d="M25.455 19.7129C23.8851 23.1655 20.4063 25.5476 16.3783 25.5339C10.881 25.5151 6.45026 21.0539 6.46905 15.5566C6.48281 11.5286 8.88866 8.06617 12.352 6.52C11.7777 7.77204 11.4563 9.15162 11.4513 10.6083C11.4326 16.0929 15.8633 20.5667 21.3606 20.5855C22.8173 20.5905 24.199 20.2786 25.455 19.7129Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
