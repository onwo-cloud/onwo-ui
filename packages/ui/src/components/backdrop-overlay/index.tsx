import type { Signal } from '@builder.io/qwik';
import { $ } from '@builder.io/qwik';
import { Animated, cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

type BackdropOverlayProps = {
  'bind:open': Signal<boolean>;
};

export const BackdropOverlay = withAs('div')<BackdropOverlayProps>(
  ({ As: as, 'bind:open': open, class: className, onClick$, ...props }) => (
    <Animated
      bind:visible={open}
      in={{ timing: 'ease-in', durationMs: 100, opacity: 0 }}
      out={{ timing: 'ease-in', durationMs: 100, opacity: 0 }}
      as={as as unknown as keyof HTMLElementTagNameMap}
      data-name="BackdropOverlay"
      class={cn('fixed inset-0 z-50 opacity-100 bg-black/50', className)}
      data-aria-hidden="true"
      aria-hidden="true"
      onClick$={[onClick$, $(() => (open.value = false))]}
      {...props}
    />
  ),
);
