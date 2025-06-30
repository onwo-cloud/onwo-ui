import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Bullet as PBullet } from '@onwo/primitives/carousel';

export type CarouselBulletProps = PropsOf<typeof PBullet>;

export const CarouselBullet = (props: CarouselBulletProps) => (
  <PBullet
    {...props}
    class={cn(
      'flex p-2 px-4 bg-transparent cursor-pointer transition items-center justify-between rounded-onwo-i-sm gap-2 text-onwo-14 w-min outline-none focus:shadow-focus hover:bg-scan data-active:bg-scan',
      props.class,
    )}
  >
    {props.children}
  </PBullet>
);
