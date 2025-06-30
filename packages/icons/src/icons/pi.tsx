import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "9",
      "x2": "9",
      "y1": "4",
      "y2": "20"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 7c0-1.7 1.3-3 3-3h13"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 20c-1.7 0-3-1.3-3-3V4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iOSIgeDI9IjkiIHkxPSI0IiB5Mj0iMjAiIC8+CiAgPHBhdGggZD0iTTQgN2MwLTEuNyAxLjMtMyAzLTNoMTMiIC8+CiAgPHBhdGggZD0iTTE4IDIwYy0xLjcgMC0zLTEuMy0zLTNWNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/pi
 */
export const PiIcon = createIcon('pi', __iconNode);
