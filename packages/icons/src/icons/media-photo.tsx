import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-photo" {...props} viewBox="0 0 32 32">
    <path
      d="M19.6538 17.4615C19.6538 19.4795 18.018 21.1154 16 21.1154C13.982 21.1154 12.3462 19.4795 12.3462 17.4615C12.3462 15.4436 13.982 13.8077 16 13.8077C18.018 13.8077 19.6538 15.4436 19.6538 17.4615Z"
      stroke="currentColor"
    />
    <path
      d="M6.5 22.5L6.5 13.5944C6.5 12.0978 7.71324 10.8846 9.20984 10.8846C10.2363 10.8846 11.1746 10.3047 11.6336 9.38664L12.2477 8.15836C12.7559 7.142 13.7947 6.5 14.931 6.5L17.069 6.50001C18.2053 6.50001 19.2441 7.14202 19.7523 8.15837L20.3664 9.38667C20.8254 10.3047 21.7637 10.8846 22.7902 10.8846C24.2868 10.8846 25.5 12.0979 25.5 13.5945V22.5C25.5 24.1568 24.1569 25.5 22.5 25.5H9.5C7.84315 25.5 6.5 24.1568 6.5 22.5Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
