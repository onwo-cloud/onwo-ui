import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-table" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 25.5V8.5C6.5 7.39543 7.39543 6.5 8.5 6.5H25.5M6.5 13.8077H25.5M6.5 21.1154H25.5M21.1154 7.23077L21.1154 25.5M13.8077 7.23077L13.8077 25.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
