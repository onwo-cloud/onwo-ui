import './global.css';
import '../../themes/moon.css';
import { ColorPage } from './pages/colors';

export default () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body class="theme-moon-light">
        <ColorPage />
      </body >
    </>
  );
};
