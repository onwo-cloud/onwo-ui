import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="other-id" {...props} viewBox="0 0 32 32">
    <path
      d="M8.02717 22.9999V13.2406M8 10.0836L8 9M16.9085 9.06394C20.825 9.06394 24 12.1836 24 16.032C24 16.6335 23.9224 17.2172 23.7766 17.774C23.5516 18.6329 23.1641 19.4278 22.6482 20.125C21.3591 21.8673 19.2685 23 16.9085 23H14.0621C13.3303 23 12.7371 22.3913 12.7371 21.6404V10.4236C12.7371 9.67266 13.3303 9.06394 14.0621 9.06394H16.9085Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
