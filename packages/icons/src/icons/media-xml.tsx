import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-xml" {...props} viewBox="0 0 32 32">
    <path
      d="M14.1885 5.01034V9.79128C14.1885 10.9688 13.259 11.9241 12.1113 11.9241H7.0252M21.5382 27H10.4618C8.55016 27 7 25.4083 7 23.4453V12.3021C7 11.5166 7.3168 10.7658 7.8748 10.2283L12.4202 5.76926C12.9335 5.27463 13.611 5 14.3145 5H21.5382C23.4498 5 25 6.59168 25 8.5547V23.4453C25 25.4083 23.4506 27 21.5382 27Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M18.073 19.7336V15.8L16.2017 18.3529L14.3297 15.8V19.7336M12.4535 15.8L9.5 19.6608M9.5 15.8L12.4535 19.6608M20.0897 15.8V19.8H22.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
