import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="media-pause" {...props} viewBox="0 0 32 32">
    <rect x="19" y="6" width="6.5" height="20" rx="2" stroke="currentColor" />
    <rect x="6.5" y="6" width="6.5" height="20" rx="2" stroke="currentColor" />
  </P.SvgIcon>
);
