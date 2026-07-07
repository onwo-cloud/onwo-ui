import type { QRL } from '@qwik.dev/core/internal';

export type CodeViewType = 'default' | 'expanded' | 'fullscreen';

type BlogCodeHeaderProps = {
  language: string;
  view: CodeViewType;
  onViewChange$: QRL<(newView: CodeViewType) => void>;
  disableExpand?: boolean;
};

export const BlogCodeHeader = (props: BlogCodeHeaderProps) => (
  <div
    style={{
      borderTopLeftRadius: 'var(--code-blog-rounding, 0px)',
      borderTopRightRadius: 'var(--code-blog-rounding, 0px)',
    }}
    class="flex bg-[#030711] text-[white] border border-[#10141e] rounded-t-md text-xs gap-4 justify-between px-3 py-1 items-center"
  >
    <span class="select-none">{props.language}</span>
  </div>
);
