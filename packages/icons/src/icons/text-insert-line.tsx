import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-insert-line" {...props} viewBox="0 0 32 32">
    <path
      d="M20.3846 25H11.6154M20.3846 7H11.6154M6.5 14.75L6.5 17.25C6.5 19.4591 8.29086 21.25 10.5 21.25L21.5 21.25C23.7091 21.25 25.5 19.4591 25.5 17.25V14.75C25.5 12.5408 23.7091 10.75 21.5 10.75L10.5 10.75C8.29086 10.75 6.5 12.5408 6.5 14.75Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
