import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "18.5",
      "cy": "17.5",
      "r": "3.5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "5.5",
      "cy": "17.5",
      "r": "3.5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "15",
      "cy": "5",
      "r": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 17.5V14l-3-3 4-3 2 3h2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOC41IiBjeT0iMTcuNSIgcj0iMy41IiAvPgogIDxjaXJjbGUgY3g9IjUuNSIgY3k9IjE3LjUiIHI9IjMuNSIgLz4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjUiIHI9IjEiIC8+CiAgPHBhdGggZD0iTTEyIDE3LjVWMTRsLTMtMyA0LTMgMiAzaDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bike
 */
export const BikeIcon = createIcon('bike', __iconNode);
