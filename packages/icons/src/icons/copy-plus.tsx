import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "line",
    "attr": {
      "x1": "15",
      "x2": "15",
      "y1": "12",
      "y2": "18"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "12",
      "x2": "18",
      "y1": "15",
      "y2": "15"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "14",
      "height": "14",
      "x": "8",
      "y": "8",
      "rx": "2",
      "ry": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMTUiIHgyPSIxNSIgeTE9IjEyIiB5Mj0iMTgiIC8+CiAgPGxpbmUgeDE9IjEyIiB4Mj0iMTgiIHkxPSIxNSIgeTI9IjE1IiAvPgogIDxyZWN0IHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgeD0iOCIgeT0iOCIgcng9IjIiIHJ5PSIyIiAvPgogIDxwYXRoIGQ9Ik00IDE2Yy0xLjEgMC0yLS45LTItMlY0YzAtMS4xLjktMiAyLTJoMTBjMS4xIDAgMiAuOSAyIDIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/copy-plus
 */
export const CopyPlusIcon = createIcon('copy-plus', __iconNode);
