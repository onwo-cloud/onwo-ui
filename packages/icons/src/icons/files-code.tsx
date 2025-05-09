import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="files-code" {...props} viewBox="0 0 32 32">
    <path
      d="M14.5 6.5H13.75L8.50002 11.6154L8.50002 12.3462M14.5 6.5H20.5C22.1569 6.5 23.5 7.80871 23.5 9.42308L23.5 22.5769C23.5 24.1913 22.1569 25.5 20.5 25.5H11.5C9.84314 25.5 8.5 24.1913 8.5 22.5769L8.50002 12.3462M14.5 6.5V12.3462H8.50002M14.5 16L12.25 18.1923L14.5 20.3846M17.5 17.4615L19.75 19.6539L17.5 21.8462"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
