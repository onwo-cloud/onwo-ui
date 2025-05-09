import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="shop-bag" {...props} viewBox="0 0 32 32">
    <path
      d="M11.5 10.1539V11.6154C11.5 14.0369 13.5147 16 16 16C18.4852 16 20.5 14.0369 20.5 11.6154V10.1539M21 25.5H11C8.79086 25.5 7 23.7091 7 21.5L7 10.5C7 8.29086 8.79086 6.5 11 6.5L21 6.50001C23.2091 6.50001 25 8.29087 25 10.5V21.5C25 23.7091 23.2091 25.5 21 25.5Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
