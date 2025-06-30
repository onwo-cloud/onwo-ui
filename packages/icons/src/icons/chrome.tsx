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
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "4"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "21.17",
      "x2": "12",
      "y1": "8",
      "y2": "8"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "3.95",
      "x2": "8.54",
      "y1": "6.06",
      "y2": "14"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "10.88",
      "x2": "15.46",
      "y1": "21.94",
      "y2": "14"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxsaW5lIHgxPSIyMS4xNyIgeDI9IjEyIiB5MT0iOCIgeTI9IjgiIC8+CiAgPGxpbmUgeDE9IjMuOTUiIHgyPSI4LjU0IiB5MT0iNi4wNiIgeTI9IjE0IiAvPgogIDxsaW5lIHgxPSIxMC44OCIgeDI9IjE1LjQ2IiB5MT0iMjEuOTQiIHkyPSIxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chrome
 * @deprecated icon.brand
 */
export const ChromeIcon = createIcon('chrome', __iconNode);
