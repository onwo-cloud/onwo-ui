import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="files-external-link" {...props} viewBox="0 0 32 32">
    <path
      d="M13.6683 7.66247L10 7.66246C8.34315 7.66246 7 9.00561 7 10.6625L7 22C7 23.6569 8.34315 25 10 25L21.3376 25C22.9944 25 24.3376 23.6569 24.3376 22V18.3317M14.3351 17.6649L24.3376 7.66246M19.0029 7.66241L24.3375 7.67218L24.3375 12.997"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
