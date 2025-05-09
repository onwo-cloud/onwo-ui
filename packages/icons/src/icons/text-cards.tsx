import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-cards" {...props} viewBox="0 0 32 32">
    <path
      d="M11.968 6C7.05335 6 6 7.05335 6 11.968V12.4C6 13.2837 6.71634 14 7.6 14H24.4C25.2837 14 26 13.2837 26 12.4V11.968C26 7.05335 24.9466 6 20.032 6H11.968Z"
      stroke="currentColor"
    />
    <path
      d="M20.032 26C24.9466 26 26 24.9466 26 20.032V19.6C26 18.7163 25.2837 18 24.4 18H19.4C18.6268 18 18 18.6268 18 19.4V24.6C18 25.3732 18.6268 26 19.4 26H20.032Z"
      stroke="currentColor"
    />
    <path
      d="M6 20.032C6 24.9466 7.05335 26 11.968 26H12.6C13.3732 26 14 25.3732 14 24.6V19.4C14 18.6268 13.3732 18 12.6 18H7.6C6.71634 18 6 18.7163 6 19.6V20.032Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
