import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="maps-panorama" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 11.6327C6.5 8.798 10.7533 6.5 16 6.5C21.2467 6.5 25.5 8.798 25.5 11.6327M6.5 11.6327V21.1649C6.5 22.9259 7.92972 24.4935 10.1538 25.5V15.9678C7.92972 14.9613 6.5 13.3936 6.5 11.6327ZM25.5 11.6327L25.5 21.1649C25.5 22.9258 24.0703 24.4934 21.8462 25.5V15.9677C24.0703 14.9612 25.5 13.3936 25.5 11.6327ZM10.5192 19.905C12.0678 19.3131 13.9587 18.9652 16 18.9652C18.0413 18.9652 19.9322 19.3131 21.4807 19.905"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
