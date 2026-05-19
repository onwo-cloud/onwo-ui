import type { RootProps } from '@onwo/primitives/radio';
import { Root } from '@onwo/primitives/radio';

export type RadioOrientation = 'horizontal' | 'vertical';

export type RadioProps = RootProps & {
  orientation?: RadioOrientation;
};

export const Radio = ({ orientation = 'vertical', class: className, ...props }: RadioProps) => {
  return (
    <Root
      class={['flex gap-4', orientation === 'horizontal' ? 'flex-row' : 'flex-col', className]}
      {...props}
    >
      {props.children}
    </Root>
  );
};
