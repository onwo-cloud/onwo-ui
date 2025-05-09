import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-png" {...props} viewBox="0 0 32 32">
    <path
      d="M14.1885 5.01034V9.79128C14.1885 10.9688 13.259 11.9241 12.1113 11.9241H7.0252M21.5382 27H10.4618C8.55016 27 7 25.4083 7 23.4453V12.3021C7 11.5166 7.3168 10.7658 7.8748 10.2283L12.4202 5.76926C12.9335 5.27463 13.611 5 14.3145 5H21.5382C23.4498 5 25 6.59168 25 8.5547V23.4453C25 25.4083 23.4506 27 21.5382 27Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M10 20V16H11.483C12.3236 16 12.6884 16.5683 12.6884 17.0793C12.6884 17.5903 12.3236 18.1586 11.483 18.1586H10M17.3998 16V20L14.3002 16V20M22 16.3793C21.7143 16.1421 21.4205 16 20.9043 16C19.7902 16 18.9734 16.8628 18.9734 18C18.9734 19.1372 19.7909 20 20.9043 20C21.4211 20 21.7143 19.8572 22 19.62V18.2117H21.4375"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
