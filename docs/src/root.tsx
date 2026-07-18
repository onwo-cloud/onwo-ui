import { component$ } from '@qwik.dev/core';
import { RouterOutlet, useQwikRouter } from '@qwik.dev/router';
import { Toaster } from '@onwo/ui/toaster';

import { RouterHead } from './commons/router-head';
import './global.css';
import { UIProvider } from './utils/icon';
import { defineKeybindModule, KeybindRegistryProvider } from '~primitives/@kit/keybind-registry';

const Heuristics = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  // useVisibleTask$(() => {
  //   const w = globalThis as any;
  //   w.symbols = [];
  //   document.addEventListener('qsymbol', (e) => w.symbols.push((e as any).detail));
  // });

  return <></>;
});

const vimModule = defineKeybindModule({
  name: 'vim',
  mappings: {
    'l': 'navigate:right',
    'h': 'navigate:left',
    'j': 'navigate:down',
    'k': 'navigate:up',
  },
});

export default component$(() => {
  useQwikRouter({ viewTransition: false });

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="/ui-fonts/load.css" />

        <Heuristics />
        <RouterHead />
      </head>
      <body class="theme-onwo-light bg-shade-25 text-shade-1000">
          <UIProvider>
            <KeybindRegistryProvider modules={[vimModule]}>
              <Toaster position="bottom-right">
                <RouterOutlet />
              </Toaster>
            </KeybindRegistryProvider>
          </UIProvider>
      </body>
    </>
  );
});
