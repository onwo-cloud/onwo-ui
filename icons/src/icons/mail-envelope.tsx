import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="mail-envelope" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 11L13.8221 15.7529C15.1467 16.6128 16.8532 16.6128 18.1779 15.7529L25.5 11M6.5 11L6.5 21C6.5 22.1046 7.39543 23 8.5 23L23.5 23C24.6046 23 25.5 22.1046 25.5 21V11M6.5 11C6.5 9.89546 7.39543 9.00002 8.5 9.00001L23.5 9C24.6046 9 25.5 9.89546 25.5 11"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
