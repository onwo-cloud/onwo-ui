import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="devices-mac" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 17.4615L6.5 17.4615M20.3846 25.5H11.6154M13.0769 25.5V21.1154M18.9231 25.5V21.1154M23.5 21.1154L8.5 21.1154C7.39543 21.1154 6.5 20.22 6.5 19.1154L6.5 8.50002C6.5 7.39545 7.39543 6.50002 8.5 6.50001L23.5 6.5C24.6046 6.5 25.5 7.39543 25.5 8.5V19.1154C25.5 20.22 24.6046 21.1154 23.5 21.1154Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
