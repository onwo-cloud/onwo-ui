import { $, component$, useSignal } from '@builder.io/qwik';
import { BackdropOverlay, Button } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultBackdropOverlay: BoxedComp = {
  title: 'Default',
  display: component$(() => {
    const visible = useSignal<boolean>(false);
    return (
      <div class="relative flex justify-center">
        <BackdropOverlay bind:open={visible} />
        <Button onClick$={$(() => (visible.value = true))}>Show overlay</Button>
      </div>
    );
  }),
  code: `const opened = useSignal<boolean>(false);
<Button onClick$={$(() => (visible.value = true))}>Show overlay</Button>
<BackdropOverlay bind:open={opened} />`,
};

export const section: Section = {
  title: 'Backdrop overlay',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/backdrop-overlay',
  description: 'Display a full page backrop overlay conditionally',
  components: [defaultBackdropOverlay],
};
