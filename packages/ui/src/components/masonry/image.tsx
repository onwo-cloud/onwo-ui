import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { composeRefs } from '~/utils/compose-refs';
import type { OneObjectOf, Primitive } from '~/utils/types';

type MasonryImageProps = {
  src: string;
} & OneObjectOf<
  [
    {
      inferSize: boolean;
    },
    {
      width: number;
      height: number;
    },
  ]
>;

export const MasonryImage = component$(
  ({ width, height, inferSize, src, ...props }: Primitive<'div'> & MasonryImageProps) => {
    const ref = useSignal<HTMLDivElement>();
    const imageRef = useSignal<HTMLImageElement>();

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
      track(() => imageRef.value);
      track(() => ref.value);

      if (!ref.value || !imageRef.value || !inferSize) return;
      const v = imageRef.value;

      ref.value.style.setProperty('--w', String(v.naturalWidth));
      ref.value.style.setProperty('--h', String(v.naturalHeight));
    });

    return (
      <div
        {...props}
        ref={composeRefs(ref, props.ref)}
        class="mm-masonry__item"
        style={width === undefined ? '' : `--w: ${width}; --h: ${height}`}
      >
        <img ref={imageRef} width={width} height={height} class="mm-masonry__img" src={src} />
      </div>
    );
  },
);
