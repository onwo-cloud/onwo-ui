import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="time-sandglass" {...props} viewBox="0 0 32 32">
    <path
      d="M8.5 25.5H23.5M9.25 22.5769H22.75M9.25 22.5769C9.25 18.9446 12.2721 16 16 16M9.25 22.5769V25.5H22.75V22.5769M22.75 22.5769C22.75 18.9446 19.7279 16 16 16M9.25 9.42308H22.75M9.25 9.42308C9.25 13.0554 12.2721 16 16 16M9.25 9.42308L9.25 6.5L22.75 6.5L22.75 9.42308M22.75 9.42308C22.75 13.0554 19.7279 16 16 16M8.5 6.5H23.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
