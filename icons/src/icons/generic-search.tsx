import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-search" {...props} viewBox="0 0 32 32">
    <path
      d="M25 25L20.5871 20.5953M20.5871 20.5953C22.0303 19.1542 22.9231 17.1621 22.9231 14.9615C22.9231 10.5645 19.3586 7 14.9615 7C10.5645 7 7 10.5645 7 14.9615C7 19.3586 10.5645 22.9231 14.9615 22.9231C17.158 22.9231 19.1467 22.0336 20.5871 20.5953Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
