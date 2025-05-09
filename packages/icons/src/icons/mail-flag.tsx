import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="mail-flag" {...props} viewBox="0 0 32 32">
    <path
      d="M8.5 25.0001L8.50021 6.99988M8.50002 21.5385H21.4892C23.2961 21.5385 24.1767 19.3324 22.8664 18.0882L20.7365 16.0658C19.9061 15.2772 19.9061 13.9537 20.7365 13.1651L22.8664 11.1427C24.1767 9.89853 23.2961 7.69238 21.4892 7.69238L8.50002 7.69238"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
