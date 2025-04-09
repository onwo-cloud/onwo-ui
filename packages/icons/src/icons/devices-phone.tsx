import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="devices-phone" {...props} viewBox="0 0 32 32">
    <path
      d="M13.8981 10.3545L11.0262 7.48268C10.7597 7.21611 10.3169 7.22668 10.0373 7.50629L8.03753 9.50602C5.50609 12.0375 9.32812 16.8721 12.2158 19.7598C15.0862 22.6301 19.9623 26.4937 22.4938 23.9623L24.4935 21.9625C24.7731 21.6829 24.7837 21.2401 24.5171 20.9736L21.6453 18.1017C21.3787 17.8351 20.9359 17.8457 20.6563 18.1253L18.6566 20.125C18.6566 20.125 17.6931 20.1232 14.7594 17.2404C11.8257 14.3577 11.8748 13.3432 11.8748 13.3432L13.8745 11.3435C14.1541 11.0639 14.1647 10.6211 13.8981 10.3545Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
