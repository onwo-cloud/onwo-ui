import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="chat-comment-bubble-question-mark" {...props} viewBox="0 0 32 32">
    <path
      d="M16 20.2222V20.9003M12.8333 13.8889C12.8333 12.14 14.2511 10.7222 16 10.7222C17.7489 10.7222 19.1667 12.14 19.1667 13.8889C19.1667 15.5569 16.9998 16.7185 16 17.8472V18.1111M15.9696 25.5C10.7229 25.5 6.5 21.1722 6.5 15.952C6.5 10.7318 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7318 25.5 15.952C25.5 17.8845 24.9171 19.6815 23.9167 21.1786L25.4696 25.4342C22.2863 25.4652 19.143 25.5 15.9696 25.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
