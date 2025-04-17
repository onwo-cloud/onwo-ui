import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C, cn } from '@onwo/primitives';

type BulletProps = PropsOf<typeof C.Bullet>;

export const Bullet = (props: BulletProps) => (
  <C.Bullet
    {...props}
    class={cn(
      'flex p-2 px-4 bg-transparent cursor-pointer transition items-center justify-between rounded-onwo-i-sm gap-2 text-onwo-14 w-min outline-none focus:shadow-focus hover:bg-scan data-active:bg-scan',
      props.class,
    )}
  >
    {props.children}
  </C.Bullet>
);
