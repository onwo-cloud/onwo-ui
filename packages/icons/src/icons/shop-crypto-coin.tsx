import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="shop-crypto-coin" {...props} viewBox="0 0 32 32">
    <path
      d="M16 28.5C22.9036 28.5 28.5 22.9036 28.5 16C28.5 9.09644 22.9036 3.5 16 3.5C9.09644 3.5 3.5 9.09644 3.5 16C3.5 22.9036 9.09644 28.5 16 28.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 11H18C18.663 11 19.2989 11.2633 19.7678 11.7322C20.2366 12.201 20.5 12.837 20.5 13.5C20.5 14.163 20.2366 14.799 19.7678 15.2678C19.2989 15.7367 18.663 16 18 16M10.5 21H19C19.663 21 20.2989 20.7367 20.7678 20.2678C21.2366 19.799 21.5 19.163 21.5 18.5C21.5 17.837 21.2366 17.201 20.7678 16.7322C20.2989 16.2633 19.663 16 19 16H12.5M12.5 11V21M14.5 11V8M17.5 11V8M14.5 24V21M17.5 24V21"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
