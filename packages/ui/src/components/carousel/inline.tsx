import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C } from '@onwo/primitives';

import { cn } from '~/utils/cn';
import { Bullet } from './bullet';
import { Slide } from './slide';
import { Step } from './step';
import { Title } from './title';

type RootProps = PropsOf<typeof C>;

export const Root = (props: RootProps) => (
  <C
    slideComponent={Slide}
    bulletComponent={Bullet}
    stepComponent={Step}
    titleComponent={Title as any}
    {...props}
    class={cn('relative', props.class)}
  >
    {props.children}
  </C>
);
