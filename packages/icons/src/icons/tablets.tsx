import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "7",
      "cy": "7",
      "r": "5"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "17",
      "cy": "17",
      "r": "5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 17h10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m3.46 10.54 7.08-7.08"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iNSIgLz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiByPSI1IiAvPgogIDxwYXRoIGQ9Ik0xMiAxN2gxMCIgLz4KICA8cGF0aCBkPSJtMy40NiAxMC41NCA3LjA4LTcuMDgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/tablets
 */
export const TabletsIcon = createIcon('tablets', __iconNode);
