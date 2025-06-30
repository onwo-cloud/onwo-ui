import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "18",
      "x": "3",
      "y": "3",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M11 9h4a2 2 0 0 0 2-2V3"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "9",
      "cy": "9",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 21v-4a2 2 0 0 1 2-2h4"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "15",
      "cy": "15",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0xMSA5aDRhMiAyIDAgMCAwIDItMlYzIiAvPgogIDxjaXJjbGUgY3g9IjkiIGN5PSI5IiByPSIyIiAvPgogIDxwYXRoIGQ9Ik03IDIxdi00YTIgMiAwIDAgMSAyLTJoNCIgLz4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjE1IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circuit-board
 */
export const CircuitBoardIcon = createIcon('circuit-board', __iconNode);
