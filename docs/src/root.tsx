import { component$ } from '@qwik.dev/core';
import {  RouterOutlet, useQwikRouter } from '@qwik.dev/router';
import { Toaster } from '@onwo/ui/toaster';

import { RouterHead } from './commons/router-head';
import './global.css';
import { UIProvider } from './utils/icon';
import { PageNavigationProvider } from '~ui/@kit/page-navigation';

const Heuristics = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  // useVisibleTask$(() => {
  //   const w = globalThis as any;
  //   w.symbols = [];
  //   document.addEventListener('qsymbol', (e) => w.symbols.push((e as any).detail));
  // });

  return <></>;
});

export default component$(() => {
  useQwikRouter();

  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="/ui-fonts/load.css" />

        <Heuristics />
        <RouterHead />
      </head>
      <body class="theme-onwo-light">
        <PageNavigationProvider class="h-screen flex flex-col">
          <Toaster position="bottom-right">
            <UIProvider>
              <RouterOutlet />
            </UIProvider>
          </Toaster>
        </PageNavigationProvider>
      </body>
    </>
  );
});
