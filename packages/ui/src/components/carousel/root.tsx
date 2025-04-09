import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C, cn } from '@onwo/primitives';

import { Bullet } from './bullet';
import { Slide } from './slide';
import { Step } from './step';
import { Title } from './title';

type RootProps = PropsOf<typeof C.Root>;

export const Root = (props: RootProps) => (
  <C.Root
    slideComponent={Slide}
    bulletComponent={Bullet}
    stepComponent={Step}
    titleComponent={Title as any}
    {...props}
    class={cn('relative', props.class)}
  >
    {props.children}
  </C.Root>
);
