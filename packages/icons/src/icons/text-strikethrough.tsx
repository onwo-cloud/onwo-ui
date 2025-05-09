import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-strikethrough" {...props} viewBox="0 0 32 32">
    <path
      d="M21.1154 11.25C21.1154 8.62665 18.9888 6.5 16.3654 6.5C13.7421 6.5 11.6154 8.62665 11.6154 11.25C11.6154 11.9738 11.7316 12.5736 11.9383 13.0769M11.6154 20.75C11.6154 23.3734 13.7421 25.5 16.3654 25.5C18.9888 25.5 21.1154 23.3734 21.1154 20.75C21.1154 20.0262 20.9992 19.4264 20.7925 18.9231M25.5 16H6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
