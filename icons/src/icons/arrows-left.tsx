import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-left" {...props} viewBox="0 0 32 32">
    <path
      d="M25.9962 15.9998L5.99981 16.0037M5.99981 16.0037L11.3834 21.3892M5.99981 16.0037L11.3834 10.6181"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
