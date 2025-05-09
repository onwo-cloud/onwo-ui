import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="files-stickers" {...props} viewBox="0 0 32 32">
    <path
      d="M19.2884 13.0769H22.5C24.1568 13.0769 25.5 14.4201 25.5 16.0769V22.5C25.5 24.1568 24.1568 25.5 22.5 25.5H16.0769C14.4201 25.5 13.0769 24.1568 13.0769 22.5V19.2884M9.5 18.9231H15.9231C17.5799 18.9231 18.9231 17.5799 18.9231 15.9231V9.5C18.9231 7.84315 17.5799 6.5 15.9231 6.5H9.5C7.84315 6.5 6.5 7.84315 6.5 9.5V15.9231C6.5 17.5799 7.84315 18.9231 9.5 18.9231Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
