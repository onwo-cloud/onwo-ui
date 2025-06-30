import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "11",
      "cy": "4",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "8",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "20",
      "cy": "16",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMSIgY3k9IjQiIHI9IjIiIC8+CiAgPGNpcmNsZSBjeD0iMTgiIGN5PSI4IiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMTYiIHI9IjIiIC8+CiAgPHBhdGggZD0iTTkgMTBhNSA1IDAgMCAxIDUgNXYzLjVhMy41IDMuNSAwIDAgMS02Ljg0IDEuMDQ1UTYuNTIgMTcuNDggNC40NiAxNi44NEEzLjUgMy41IDAgMCAxIDUuNSAxMFoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/paw-print
 */
export const PawPrintIcon = createIcon('paw-print', __iconNode);
