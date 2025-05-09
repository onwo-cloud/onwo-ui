import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="mail-filter" {...props} viewBox="0 0 32 32">
    <path
      d="M8.90822 7.5L23.0918 7.50001C24.1457 7.50001 25 8.35435 25 9.40823C25 9.89532 24.8137 10.364 24.4794 10.7182L18.0769 17.5L18.0769 22.3173C18.0769 23.791 16.5371 24.7586 15.2093 24.1193L15.0554 24.0452C14.3632 23.7119 13.9231 23.0115 13.9231 22.2432L13.9231 17.5L7.52065 10.7182C7.18627 10.364 7 9.89532 7 9.40822C7 8.35434 7.85434 7.5 8.90822 7.5Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
