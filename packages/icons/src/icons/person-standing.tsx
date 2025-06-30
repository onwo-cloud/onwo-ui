import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "5",
      "r": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9 20 3-6 3 6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m6 8 6 2 6-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 10v4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjUiIHI9IjEiIC8+CiAgPHBhdGggZD0ibTkgMjAgMy02IDMgNiIgLz4KICA8cGF0aCBkPSJtNiA4IDYgMiA2LTIiIC8+CiAgPHBhdGggZD0iTTEyIDEwdjQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/person-standing
 */
export const PersonStandingIcon = createIcon('person-standing', __iconNode);
