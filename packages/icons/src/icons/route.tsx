import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "19",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "5",
      "r": "3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI2IiBjeT0iMTkiIHI9IjMiIC8+CiAgPHBhdGggZD0iTTkgMTloOC41YTMuNSAzLjUgMCAwIDAgMC03aC0xMWEzLjUgMy41IDAgMCAxIDAtN0gxNSIgLz4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjUiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/route
 */
export const RouteIcon = createIcon('route', __iconNode);
