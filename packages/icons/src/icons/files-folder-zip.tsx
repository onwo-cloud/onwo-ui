import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="files-folder-zip" {...props} viewBox="0 0 32 32">
    <path
      d="M19 11V11.7368M20.4735 13.2104V13.9473M19 15.421V16.1579M20.4735 17.6316V18.3684M19 19.842V20.5789M20.4735 22.0526V22.7895M19 24.2632V25M6.5 9.5L6.5 22.5C6.5 24.1569 7.84314 25.5 9.49999 25.5L22.5 25.5C24.1568 25.5 25.5 24.1569 25.5 22.5V13.1538C25.5 11.497 24.1568 10.1538 22.5 10.1538H16.7308L14.5385 6.5L9.5 6.5C7.84315 6.5 6.5 7.84315 6.5 9.5Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
