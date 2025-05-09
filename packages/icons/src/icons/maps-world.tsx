import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="maps-world" {...props} viewBox="0 0 32 32">
    <path
      d="M16 25.5C21.2467 25.5 25.5 21.2467 25.5 16C25.5 10.7533 21.2467 6.5 16 6.5M16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5M16 25.5C13.5784 25.5 11.6154 21.2467 11.6154 16C11.6154 10.7533 13.5784 6.5 16 6.5M16 25.5C18.4216 25.5 20.3846 21.2467 20.3846 16C20.3846 10.7533 18.4216 6.5 16 6.5M6.5 15.2692C6.5 16.48 10.7533 17.4615 16 17.4615C21.2467 17.4615 25.5 16.48 25.5 15.2692"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
