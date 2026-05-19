import { component$ } from '@builder.io/qwik';
import type { HProgressProps } from '@onwo/primitives/progress';
import { Root, Indicator } from '@onwo/primitives/progress';

export const Progress = component$((props: HProgressProps) => {
  return (
    <Root
      class={['relative h-4 w-full overflow-hidden rounded-sm border bg-muted', props.class]}
      {...props}
    >
      <Indicator class="h-full w-full flex-1 bg-primary transition-all" />
    </Root>
  );
});
