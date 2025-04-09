import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-expand" {...props} viewBox="0 0 32 32">
    <path
      d="M12.345 25.9999H6.5L6.5 20.1538M7.23069 25.2689L13.9469 18.5515M18.7824 13.7162L25.4999 7M25.4963 12.8461V7L19.6513 7.00001"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
