import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-cut" {...props} viewBox="0 0 32 32">
    <path
      d="M18.1923 21.1154L8.69232 6.5M13.8077 21.1154L23.3077 6.5M25.5 21.8461C25.5 23.8641 23.8641 25.5 21.8462 25.5C19.8282 25.5 18.1923 23.8641 18.1923 21.8461C18.1923 19.8282 19.8282 18.1923 21.8462 18.1923C23.8641 18.1923 25.5 19.8282 25.5 21.8461ZM13.8077 21.8461C13.8077 23.8641 12.1718 25.5 10.1538 25.5C8.13588 25.5 6.5 23.8641 6.5 21.8461C6.5 19.8282 8.13588 18.1923 10.1538 18.1923C12.1718 18.1923 13.8077 19.8282 13.8077 21.8461Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
