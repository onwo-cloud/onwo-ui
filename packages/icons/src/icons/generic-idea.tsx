import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-idea" {...props} viewBox="0 0 32 32">
    <path
      d="M12.25 25.5H19.75M18.25 16.7307C18.25 17.9415 17.2426 18.923 16 18.923C14.7574 18.923 13.75 17.9415 13.75 16.7307M8.5 13.6455C8.5 9.30013 11.8579 6.5 16 6.5C20.1421 6.5 23.5 9.30013 23.5 13.6455C23.5 16.884 20.6962 19.4552 19.9374 21.6002C19.7532 22.1209 19.3023 22.5769 18.75 22.5769H13.25C12.6977 22.5769 12.2468 22.1209 12.0626 21.6002C11.3038 19.4552 8.5 16.884 8.5 13.6455Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
