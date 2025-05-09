import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="mail-box" {...props} viewBox="0 0 32 32">
    <path
      d="M18.1923 15.2693H13.8077M7.23077 11.8846L7.23077 21.5C7.23077 23.7091 9.02164 25.5 11.2308 25.5H20.7692C22.9784 25.5 24.7692 23.7091 24.7692 21.5V11.8846C24.7692 11.3323 24.3215 10.8846 23.7692 10.8846L8.23077 10.8846C7.67849 10.8846 7.23077 11.3323 7.23077 11.8846ZM6.5 8.5L6.5 8.88462C6.5 9.98918 7.39543 10.8846 8.5 10.8846H23.5C24.6046 10.8846 25.5 9.98919 25.5 8.88462V8.50001C25.5 7.39544 24.6046 6.50001 23.5 6.50001L8.5 6.5C7.39543 6.5 6.5 7.39543 6.5 8.5Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
