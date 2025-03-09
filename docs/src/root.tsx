import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import './global.css';

export default () => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body class="theme-moon-light">
        <RouterOutlet />
        {/*<ServiceWorkerRegister /> to add pwa*/}
      </body>
    </QwikCityProvider>
  );
};
