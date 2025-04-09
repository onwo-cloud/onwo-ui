import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-close" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7533 25.5 16Z"
      stroke="currentColor"
    />
    <path
      d="M19.6993 12.3462L16 16.0455M16 16.0455L12.3007 19.7448M16 16.0455L19.6993 19.7448M16 16.0455L12.3007 12.3462"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
