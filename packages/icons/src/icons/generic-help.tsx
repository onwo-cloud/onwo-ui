import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-help" {...props} viewBox="0 0 32 32">
    <path
      d="M9.42308 9.42308L12.3462 12.3462M22.5769 22.5769L19.6538 19.6538M9.42308 22.5769L12.3462 19.6538M22.5769 9.42308L19.6538 12.3462M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7533 25.5 16ZM20.3846 16C20.3846 18.4216 18.4216 20.3846 16 20.3846C13.5784 20.3846 11.6154 18.4216 11.6154 16C11.6154 13.5784 13.5784 11.6154 16 11.6154C18.4216 11.6154 20.3846 13.5784 20.3846 16Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
