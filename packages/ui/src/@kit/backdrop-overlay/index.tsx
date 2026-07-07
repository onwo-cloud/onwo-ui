import type { AsProps } from '@onwo/primitives';
import { withAs } from '@onwo/primitives';
import { Animated } from '@onwo/primitives/animated';
import type { Signal } from '@qwik.dev/core';
import { $ } from '@qwik.dev/core';

type BackdropOverlayPropsInner = {
  visible: Signal<boolean>;
};

export const BackdropOverlay = withAs('div')<BackdropOverlayPropsInner>(
  ({ As, visible, class: className, onClick$, ...props }) => (
    <Animated
      visible={visible}
      in={{ timing: 'ease-in', durationMs: 100, opacity: 0 }}
      out={{ timing: 'ease-in', durationMs: 100, opacity: 0 }}
      as={As as unknown as keyof HTMLElementTagNameMap}
      data-name="BackdropOverlay"
      class={['fixed inset-0 z-50 opacity-100 bg-black/50', className]}
      data-aria-hidden="true"
      aria-hidden="true"
      onClick$={[onClick$, $(() => (visible.value = false))]}
      {...props}
    />
  ),
);

export type BackdropOverlayProps = AsProps<typeof BackdropOverlay>;
