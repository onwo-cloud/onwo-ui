import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-delete" {...props} viewBox="0 0 32 32">
    <path
      d="M16 21.8462L16 13.0769M6.5 9.42308H8.69231M25.5 9.42308H23.3077M19.6538 9.42308H12.3462M19.6538 9.42308V7.96154C19.6538 7.15435 18.9995 6.5 18.1923 6.5H13.8077C13.0005 6.5 12.3462 7.15435 12.3462 7.96154V9.42308M19.6538 9.42308H23.3077M12.3462 9.42308H8.69231M23.3077 9.42308V22.5769C23.3077 24.1913 21.999 25.5 20.3846 25.5H11.6154C10.001 25.5 8.69231 24.1913 8.69231 22.5769V9.42308"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
