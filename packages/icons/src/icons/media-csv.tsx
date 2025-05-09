import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-csv" {...props} viewBox="0 0 32 32">
    <path
      d="M14.1885 5.01034V9.79128C14.1885 10.9688 13.259 11.9241 12.1113 11.9241H7.0252M21.5382 27H10.4618C8.55016 27 7 25.4083 7 23.4453V12.3021C7 11.5166 7.3168 10.7658 7.8748 10.2283L12.4202 5.76926C12.9335 5.27463 13.611 5 14.3145 5H21.5382C23.4498 5 25 6.59168 25 8.5547V23.4453C25 25.4083 23.4506 27 21.5382 27Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M13.1211 19.62C12.8266 19.8573 12.5239 20 11.9913 20C10.8426 20 10 19.1373 10 18C10 16.8627 10.8433 16 11.992 16C12.5246 16 12.8272 16.1427 13.1218 16.3793M16.8229 16.1379C15.687 15.7886 14.9003 16.1346 14.9003 16.8273C14.9003 18.0039 17.2111 17.8339 17.2111 18.9773C17.2111 19.9919 15.8838 20.1893 14.7122 19.5246M22 16L20.1907 20L18.382 16"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
