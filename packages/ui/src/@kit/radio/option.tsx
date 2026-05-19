import type { OptionProps } from '@onwo/primitives/radio';
import { Option } from '@onwo/primitives/radio';

export type RadioOptionProps = OptionProps;

export const RadioOption = ({ children, ds, ...props }: RadioOptionProps) => (
  <Option ds={[{ root: 'cursor-pointer flex gap-2 p-4 border border-separator rounded-xl' }, ds]} {...props}>
    {children}
  </Option>
);
