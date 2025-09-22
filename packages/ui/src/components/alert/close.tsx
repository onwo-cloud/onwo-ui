import type { QwikHTMLElements } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Button } from '@onwo/primitives/button';
import { SvgIcon } from '@onwo/primitives/svg-icon';

export type AlertCloseProps = QwikHTMLElements['button'];

export const AlertClose = ({ type: buttonType, class: className, ...props }: AlertCloseProps) => (
  <Button
    type={buttonType ?? 'button'}
    class={cn(
      'absolute flex p-1 bg-transparent text-ink select-none transition-all items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-xs gap-2 z-0 text-onwo-16 w-6 h-6 hover:text-ink active:scale-90 end-4 group row top:4',
      className,
    )}
    {...props}
  >
    <SvgIcon size="xs" viewBox="0 0 32 32">
      <path
        d="M7 7L16 16M16 16L7 25M16 16L25 25M16 16L25 7"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>

    <span class="absolute block bg-transparent pointer-events-none transition-[background-color_0.2s_ease-in-out z-[-1] inset-0 group-hover:bg-papyrus"></span>
  </Button>
);
