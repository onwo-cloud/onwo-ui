import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="notifications-notifications" {...props} viewBox="0 0 32 32">
    <path
      d="M18.9231 8.69233H10.5C8.29086 8.69233 6.5 10.4832 6.5 12.6923L6.5 21.5C6.5 23.7091 8.29086 25.5 10.5 25.5L19.3077 25.5C21.5168 25.5 23.3077 23.7091 23.3077 21.5V13.0769M25.5 9.78846C25.5 11.6046 24.0277 13.0769 22.2115 13.0769C20.3954 13.0769 18.9231 11.6046 18.9231 9.78846C18.9231 7.97229 20.3954 6.5 22.2115 6.5C24.0277 6.5 25.5 7.97229 25.5 9.78846Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
