import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="software-data" {...props} viewBox="0 0 32 32">
    <path
      d="M8 10.1538V21.4808C8 23.7005 11.5817 25.5 16 25.5C20.4183 25.5 24 23.7005 24 21.4808L24 10.1538M8 16.3654C8 18.5851 11.5817 20.3846 16 20.3846C20.4183 20.3846 24 18.5851 24 16.3654M24 10.5192C24 8.29947 20.4183 6.5 16 6.5C11.5817 6.5 8 8.29947 8 10.5192C8 12.739 11.5817 14.5385 16 14.5385C20.4183 14.5385 24 12.739 24 10.5192Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
