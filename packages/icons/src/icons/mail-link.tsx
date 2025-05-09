import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="mail-link" {...props} viewBox="0 0 32 32">
    <path
      d="M13.1153 18.9956L18.9956 13.1153M15.5956 10.6873L18.5988 7.68408C20.1775 6.10531 22.7372 6.10531 24.316 7.68408C25.8947 9.26284 25.8947 11.8225 24.316 13.4013L21.9771 15.7402M16.4121 21.3052L13.4013 24.316C11.8225 25.8948 9.26284 25.8948 7.68408 24.316C6.10531 22.7373 6.10531 20.1776 7.68408 18.5988L10.5427 15.7402"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
