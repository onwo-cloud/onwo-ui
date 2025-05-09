import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-attach" {...props} viewBox="0 0 32 32">
    <path
      d="M13.9617 19.6086L18.1668 15.4034C18.8499 14.7203 18.876 13.639 18.2252 12.9881C17.5743 12.3372 16.5237 12.3942 15.8407 13.0772L9.83067 19.0255C8.46452 20.3917 8.41231 22.5544 9.71406 23.8562C11.0158 25.1579 13.1786 25.1057 14.5447 23.7396L22.5028 15.7815C24.552 13.7323 24.6303 10.4882 22.6777 8.53553C20.7251 6.58291 17.4809 6.66122 15.4317 8.71045L9.51574 14.6264"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
