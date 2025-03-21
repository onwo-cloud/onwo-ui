import { QwikCityProvider, RouterOutlet } from '@builder.io/qwik-city';
import './global.css';

export default () => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Onwo-ui</title>
      </head>
      <body class="theme-onwo-light">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
};
