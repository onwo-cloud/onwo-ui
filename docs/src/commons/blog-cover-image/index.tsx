type BlogCoverImageProps = {
  src: string;
  width: number;
  height: number;
};

export const BlogCoverImage = (props: BlogCoverImageProps) => (
  <img
    alt="article cover"
    class="block w-full rounded-onwo-s-md mt-6 shadow-xs h-[160px] object-cover"
    src={props.src}
    width={props.width}
    height={props.height}
  />
);
