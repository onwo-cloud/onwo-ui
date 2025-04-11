import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

type BackdropOverlayProps = {
  open: boolean;
};

export const BackdropOverlay = withAs('div')<BackdropOverlayProps>(
  ({ As, open, class: className, ...props }) => (
    <As
      {...props}
      data-name="BackdropOverlay"
      data-state={open ? 'open' : 'closed'}
      class={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 opacity-100 bg-black/50',
        //!open && 'pointer-events-none',
        className,
      )}
      data-aria-hidden="true"
      aria-hidden="true"
    />
  ),
);
