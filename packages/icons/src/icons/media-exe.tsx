import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-exe" {...props} viewBox="0 0 32 32">
    <path
      d="M14.1885 5.01034V9.79128C14.1885 10.9688 13.259 11.9241 12.1113 11.9241H7.0252M21.5382 27H10.4618C8.55016 27 7 25.4083 7 23.4453V12.3021C7 11.5166 7.3168 10.7658 7.8748 10.2283L12.4202 5.76926C12.9335 5.27463 13.611 5 14.3145 5H21.5382C23.4498 5 25 6.59168 25 8.5547V23.4453C25 25.4083 23.4506 27 21.5382 27Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M12.4969 16H10V20H12.5672M10 17.916H12.5672M21.9297 16H19.4328V20H22M19.4328 17.916H22M17.7143 16L14.2857 19.988M14.2857 16L17.7143 19.988"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
