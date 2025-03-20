import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="chat-comment-add" {...props} viewBox="0 0 32 32">
    <path
      d="M13 14.5H19M16 11.5L16 17.5M7 10.5L7 23.5382C7 24.3551 7.92646 24.8273 8.58752 24.3474L11.8462 21.9815L21 21.9815C23.2091 21.9815 25 20.1906 25 17.9815V10.5C25 8.29088 23.2091 6.50003 21 6.50002L11 6.5C8.79087 6.5 7 8.29086 7 10.5Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
