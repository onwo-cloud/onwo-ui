import type { RootProps } from '@onwo/primitives/radio';
import { Root } from '@onwo/primitives/radio';

export type RadioProps = RootProps;

export const Radio = ({ ...props }: RootProps) => {
  return (
    <Root
      class="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"
      {...props}
    >
      {props.children}
    </Root>
  );
};
