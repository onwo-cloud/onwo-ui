import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-eye" {...props} viewBox="0 0 32 32">
    <path
      d="M15.6538 11.9091C10.8745 11.9091 7 16.5303 7 17.7045C7 18.8787 10.8745 23.5 15.6538 23.5C20.4332 23.5 24.3077 18.8787 24.3077 17.7045C24.3077 16.5303 20.4332 11.9091 15.6538 11.9091ZM15.6538 11.9091C13.5509 11.9091 11.8462 13.588 11.8462 15.6591C11.8462 17.7301 13.551 19.4091 15.6539 19.4091C17.7568 19.4091 19.4616 17.7301 19.4616 15.6591C19.4616 13.588 17.7568 11.9091 15.6538 11.9091ZM25 11.9091C22.3642 9.74337 19.2869 8.5 16 8.5C12.7131 8.5 9.63584 9.74337 7 11.9091"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
