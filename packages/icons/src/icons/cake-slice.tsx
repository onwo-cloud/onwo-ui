import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "9",
      "cy": "7",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 13H3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 17H3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iNyIgcj0iMiIgLz4KICA8cGF0aCBkPSJNNy4yIDcuOSAzIDExdjljMCAuNi40IDEgMSAxaDE2Yy42IDAgMS0uNCAxLTF2LTljMC0yLTMtNi03LThsLTMuNiAyLjYiIC8+CiAgPHBhdGggZD0iTTE2IDEzSDMiIC8+CiAgPHBhdGggZD0iTTE2IDE3SDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/cake-slice
 */
export const CakeSliceIcon = createIcon('cake-slice', __iconNode);
