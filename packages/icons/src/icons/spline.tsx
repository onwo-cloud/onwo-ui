import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "19",
      "cy": "5",
      "r": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "5",
      "cy": "19",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 17A12 12 0 0 1 17 5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjUiIHI9IjIiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjE5IiByPSIyIiAvPgogIDxwYXRoIGQ9Ik01IDE3QTEyIDEyIDAgMCAxIDE3IDUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/spline
 */
export const SplineIcon = createIcon('spline', __iconNode);
