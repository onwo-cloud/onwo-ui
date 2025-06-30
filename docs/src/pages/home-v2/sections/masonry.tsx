import { Masonry, MasonryImage, MasonryItem } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const photos = [
  { width: 300, height: 450, src: '/photos/photo-98fd-300x450.jpg' },
  { width: 300, height: 200, src: '/photos/photo-ea54-300x200.jpg' },
  { width: 400, height: 450, src: '/photos/photo-98fd-400x450.jpg' },
  { width: 500, height: 450, src: '/photos/photo-a5ad-500x450.jpg' },
  { width: 300, height: 350, src: '/photos/photo-a5ad-300x350.jpg' },
  { width: 300, height: 350, src: '/photos/photo-98fd-300x350.jpg' },
  { width: 400, height: 450, src: '/photos/photo-5b8c-400x450.jpg' },
  { width: 300, height: 200, src: '/photos/photo-a5ad-300x200.jpg' },
  { width: 300, height: 450, src: '/photos/photo-c2c4-300x450.jpg' },
  { width: 300, height: 350, src: '/photos/photo-48f0-300x350.jpg' },
  { width: 300, height: 450, src: '/photos/photo-9a89-300x450.jpg' },
  { width: 300, height: 450, src: '/photos/photo-ea54-300x450.jpg' },
  { width: 400, height: 450, src: '/photos/photo-a5ad-400x450.jpg' },
  { width: 300, height: 650, src: '/photos/photo-c2c4-300x650.jpg' },
  { width: 500, height: 450, src: '/photos/photo-98fd-500x450.jpg' },
  { width: 500, height: 450, src: '/photos/photo-48f0-500x450.jpg' },
  { width: 350, height: 350, src: '/photos/photo-5b8c-350x350.jpg' },
  { width: 200, height: 300, src: '/photos/photo-98fd-200x300.jpg' },
  { width: 350, height: 350, src: '/photos/photo-c2c4-350x350.jpg' },
  { width: 500, height: 400, src: '/photos/photo-48f0-500x400.jpg' },
  { width: 300, height: 650, src: '/photos/photo-a5ad-300x650.jpg' },
  { width: 200, height: 400, src: '/photos/photo-c2c4-200x400.jpg' },
  { width: 400, height: 200, src: '/photos/photo-9a89-400x200.jpg' },
  { width: 350, height: 350, src: '/photos/photo-9a89-350x350.jpg' },
  { width: 300, height: 350, src: '/photos/photo-c2c4-300x350.jpg' },
  { width: 300, height: 650, src: '/photos/photo-48f0-300x650.jpg' },
  { width: 500, height: 400, src: '/photos/photo-5b8c-500x400.jpg' },
  { width: 350, height: 350, src: '/photos/photo-ea54-350x350.jpg' },
  { width: 300, height: 450, src: '/photos/photo-a5ad-300x450.jpg' },
  { width: 400, height: 450, src: '/photos/photo-c2c4-400x450.jpg' },
  { width: 300, height: 200, src: '/photos/photo-9a89-300x200.jpg' },
  { width: 200, height: 300, src: '/photos/photo-a5ad-200x300.jpg' },
  { width: 300, height: 350, src: '/photos/photo-9a89-300x350.jpg' },
  { width: 400, height: 450, src: '/photos/photo-48f0-400x450.jpg' },
  { width: 400, height: 200, src: '/photos/photo-a5ad-400x200.jpg' },
  { width: 300, height: 350, src: '/photos/photo-5b8c-300x350.jpg' },
  { width: 200, height: 300, src: '/photos/photo-ea54-200x300.jpg' },
  { width: 200, height: 400, src: '/photos/photo-9a89-200x400.jpg' },
  { width: 400, height: 200, src: '/photos/photo-c2c4-400x200.jpg' },
  { width: 200, height: 400, src: '/photos/photo-a5ad-200x400.jpg' },
  { width: 400, height: 200, src: '/photos/photo-98fd-400x200.jpg' },
  { width: 350, height: 350, src: '/photos/photo-98fd-350x350.jpg' },
  { width: 200, height: 400, src: '/photos/photo-48f0-200x400.jpg' },
  { width: 200, height: 400, src: '/photos/photo-98fd-200x400.jpg' },
  { width: 400, height: 200, src: '/photos/photo-ea54-400x200.jpg' },
  { width: 200, height: 400, src: '/photos/photo-5b8c-200x400.jpg' },
  { width: 500, height: 400, src: '/photos/photo-69a3-500x400.jpg' },
  { width: 200, height: 400, src: '/photos/photo-ea54-200x400.jpg' },
  { width: 400, height: 450, src: '/photos/photo-9a89-400x450.jpg' },
  { width: 200, height: 300, src: '/photos/photo-5b8c-200x300.jpg' },
  { width: 500, height: 450, src: '/photos/photo-ea54-500x450.jpg' },
];

const defaultMasonry: BoxedComp = {
  title: 'Default',
  display: () => (
    <Masonry columnWidth={140} gap={16}>
      {photos.slice(0, 20).map(({ src, width, height }, idx) => (
        <MasonryImage key={idx} src={src} width={width} height={height} />
      ))}
    </Masonry>
  ),
  code: `<Masonry columnWidth={140} gap={16}>
  {photos.slice(0, 20).map(({ src, width, height }, idx) => (
    <MasonryImage key={idx} src={src} width={width} height={height} />
  ))}
</Masonry>`,
};

const imagesAutoSizingMasonry: BoxedComp = {
  title: 'Images auto sizing',
  display: () => (
    <Masonry columnWidth={140} gap={16}>
      {photos.slice(0, 20).map(({ src }, idx) => (
        <MasonryImage key={idx} src={src} inferSize />
      ))}
    </Masonry>
  ),
  code: `<Masonry columnWidth={140} gap={16}>
  {photos.slice(0, 20).map(({ src }, idx) => (
    <MasonryImage key={idx} src={src} inferSize />
  ))}
</Masonry>`,
};

const boxesMasonry: BoxedComp = {
  title: 'Boxes',
  display: () => (
    <Masonry columnWidth={140} gap={16}>
      {photos.slice(0, 20).map(({ width, height }, idx) => (
        <MasonryItem
          class="flex items-center justify-center"
          key={idx}
          width={width}
          height={height}
        >
          <span>{idx}</span>
        </MasonryItem>
      ))}
    </Masonry>
  ),
  code: `<Masonry columnWidth={140} gap={16}>
  {photos.slice(0, 20).map(({ width, height }, idx) => (
    <MasonryItem
      class="flex items-center justify-center"
      key={idx}
      width={width}
      height={height}
    >
      <span>{idx}</span>
    </MasonryItem>
</Masonry>`,
};

export const section: Section = {
  title: 'Masonry',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/masonry',
  description: 'Display a Masonry component',
  components: [defaultMasonry, imagesAutoSizingMasonry, boxesMasonry],
};
