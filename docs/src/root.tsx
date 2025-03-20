import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import './global.css';

export default () => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <title>Onwo-ui</title>
      </head>
      <body class="theme-onwo-light">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
};
