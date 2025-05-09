import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="chat-double-bubble" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 13.6342L6.5 10.5C6.5 8.29086 8.29087 6.49999 10.5 6.5L18.3936 6.50002C19.9586 6.50002 21.2272 7.76868 21.2272 9.33365C21.2272 10.8986 19.9586 12.1673 18.3936 12.1673L10.0065 12.1673L8.27139 14.2705C7.67463 14.9939 6.5 14.5719 6.5 13.6342Z"
      stroke="currentColor"
    />
    <path
      d="M24.5 23.0684V20.2906C24.5 18.0815 22.7091 16.2906 20.4999 16.2906L12.6063 16.2907C11.0414 16.2907 9.77271 17.5593 9.77271 19.1243C9.77271 20.6893 11.0414 21.9579 12.6063 21.9579L20.9935 21.9579L22.7893 23.772C23.4178 24.4068 24.5 23.9618 24.5 23.0684Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
