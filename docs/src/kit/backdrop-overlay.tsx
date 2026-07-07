import { $, component$, useSignal } from '@qwik.dev/core';
import { BackdropOverlay } from '@onwo/ui/backdrop-overlay';
import { Button } from '@onwo/ui/button';

import type { BoxedComp, Section } from '.';

const defaultBackdropOverlay: BoxedComp = {
  title: 'Default',
  display: component$(() => {
    const visible = useSignal<boolean>(false);
    return (
      <div class="relative flex justify-center">
        <BackdropOverlay visible={visible} />
        <Button onClick$={$(() => (visible.value = true))}>Show overlay</Button>
      </div>
    );
  }),
  code: `const opened = useSignal<boolean>(false);
<Button onClick$={$(() => (visible.value = true))}>Show overlay</Button>
<BackdropOverlay visible={opened} />`,
};

export const section: Section = {
  title: 'Backdrop overlay',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/backdrop-overlay',
  description: 'Display a full page backrop overlay conditionally',
  default: defaultBackdropOverlay,
  others: [],
};
