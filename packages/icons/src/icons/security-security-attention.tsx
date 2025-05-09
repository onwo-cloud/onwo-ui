import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="security-security-attention" {...props} viewBox="0 0 32 32">
    <path
      d="M16 11.0001L16 16.3334M16 18.9723V20M8 15.8208V10.5C8 8.29086 9.79086 6.5 12 6.5H20C22.2091 6.5 24 8.29086 24 10.5V15.8208C24 19.4151 21.5239 22.4478 18.2062 24.4055C16.8462 25.208 15.1538 25.208 13.7938 24.4055C10.4761 22.4478 8 19.4151 8 15.8208Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
