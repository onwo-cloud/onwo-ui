import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="generic-check-rounded" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7533 25.5 16Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 15L15 19.5L20.2222 12.8334"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
