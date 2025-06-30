import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 12c0-1.7.7-3.2 1.8-4.2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 12c0 1.7-.7 3.2-1.8 4.2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNNiAxMmMwLTEuNy43LTMuMiAxLjgtNC4yIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+CiAgPHBhdGggZD0iTTE4IDEyYzAgMS43LS43IDMuMi0xLjggNC4yIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/disc-3
 */
export const Disc3Icon = createIcon('disc-3', __iconNode);
