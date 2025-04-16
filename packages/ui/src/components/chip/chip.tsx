import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

export type ChipSize = 'sm' | 'md';
export type ChipVariant =
  | 'default'
  | 'stroke' // same as default but with an outline on hover
  | 'ghost';

export type ChipProps = {
  size?: ChipSize; // default: md
  variant?: ChipVariant;
  active?: boolean;
};

export const Chip = withAs('button')<ChipProps>(
  ({
    As,
    size = 'md',
    variant = 'default',
    active = false,
    children,
    name,
    class: className,
    ...props
  }) => (
    <As
      {...props}
      class={cn(
        'relative flex p-1 px-2 py-1 text-ink cursor-pointer disabled:text-lead disabled:cursor-default transition items-center flex-row overflow-hidden duration-200 rounded-onwo-i-sm gap-1 z-0 hover:bg-accent/10 hover:text-accent w-min whitespace-nowrap',
        size === 'sm' && 'rounded-onwo-i-sm text-onwo-14 h-8',
        size === 'md' && 'rounded-onwo-i-sm text-onwo-14 h-10',
        variant !== 'ghost' && 'bg-paper disabled:bg-paper',
        variant === 'ghost' && 'disabled:bg-transparent',
        variant === 'stroke' && 'hover:shadow-interactive disabled:shadow-none',
        active && 'text-accent bg-accent/10',
        active && variant === 'stroke' && 'shadow-interactive',
        className,
      )}
    >
      {children}
    </As>
  ),
);
