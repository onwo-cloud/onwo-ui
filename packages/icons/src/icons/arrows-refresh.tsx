import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-refresh" {...props} viewBox="0 0 32 32">
    <path
      d="M18.0357 23H11.9286C10.4295 23 9.21429 21.7464 9.21429 20.2V9M6.5 11.8L9.21429 9M9.21429 9L11.9286 11.8M13.9643 9L20.0714 9C21.5705 9 22.7857 10.2536 22.7857 11.8L22.7857 23M25.5 20.2L22.7857 23M22.7857 23L20.0714 20.2"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
