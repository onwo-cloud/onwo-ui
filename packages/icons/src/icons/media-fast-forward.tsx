import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-fast-forward" {...props} viewBox="0 0 32 32">
    <path
      d="M10.1607 22.4547L15.1055 18.0899C16.2982 17.0371 16.2982 14.9629 15.1055 13.9101L10.1607 9.54534C8.66191 8.22238 6.5 9.45664 6.5 11.6353L6.5 20.3647C6.5 22.5434 8.66191 23.7776 10.1607 22.4547Z"
      stroke="currentColor"
    />
    <path
      d="M19.6607 22.4547L24.6055 18.0899C25.7982 17.0371 25.7982 14.9629 24.6055 13.9101L19.6607 9.54534C18.1619 8.22238 16 9.45664 16 11.6353V20.3647C16 22.5434 18.1619 23.7776 19.6607 22.4547Z"
      stroke="currentColor"
    />
  </SvgIcon>
);
