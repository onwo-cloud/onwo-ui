import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="files-save" {...props} viewBox="0 0 32 32">
    <path
      d="M11.6154 9.42305V11.6154M19.6538 18.1923C19.6538 20.2102 18.018 21.8461 16 21.8461C13.982 21.8461 12.3462 20.2102 12.3462 18.1923C12.3462 16.1743 13.982 14.5384 16 14.5384C18.018 14.5384 19.6538 16.1743 19.6538 18.1923ZM10.5 25.5L21.5 25.5C23.7091 25.5 25.5 23.7091 25.5 21.5V12.5415C25.5 11.4806 25.0786 10.4632 24.3284 9.71302L22.287 7.67157C21.5368 6.92142 20.5194 6.5 19.4585 6.5L10.5 6.50001C8.29086 6.50002 6.5 8.29088 6.5 10.5L6.5 21.5C6.5 23.7091 8.29086 25.5 10.5 25.5Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
