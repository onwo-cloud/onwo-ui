import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Root as PRoot } from '@onwo/primitives/carousel';

import { Bullet } from './bullet';
import { Slide } from './slide';
import { Step } from './step';
import { Title } from './title';

type RootProps = PropsOf<typeof PRoot>;

export const Root = (props: RootProps) => (
  <PRoot
    slideComponent={Slide}
    bulletComponent={Bullet}
    stepComponent={Step}
    titleComponent={Title as any}
    {...props}
    class={cn('relative', props.class)}
  >
    {props.children}
  </PRoot>
);
