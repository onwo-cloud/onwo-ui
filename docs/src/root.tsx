import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import './global.css';
import { RouterHead } from './commons/router-head';

const Heuristics = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const w = globalThis as any;
    w.symbols = [];
    document.addEventListener('qsymbol', (e) => w.symbols.push((e as any).detail));
  });

  return <></>;
});

export default () => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Heuristics />
        <RouterHead />
      </head>
      <body class="theme-onwo-light">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
};
