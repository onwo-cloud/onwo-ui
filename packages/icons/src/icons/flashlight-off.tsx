import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 2h11v4c0 2-2 2-2 4v1"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "11",
      "x2": "18",
      "y1": "6",
      "y2": "6"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "2",
      "x2": "22",
      "y1": "2",
      "y2": "22"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMTZ2NGEyIDIgMCAwIDEtMiAyaC00YTIgMiAwIDAgMS0yLTJWMTBjMC0yLTItMi0yLTQiIC8+CiAgPHBhdGggZD0iTTcgMmgxMXY0YzAgMi0yIDItMiA0djEiIC8+CiAgPGxpbmUgeDE9IjExIiB4Mj0iMTgiIHkxPSI2IiB5Mj0iNiIgLz4KICA8bGluZSB4MT0iMiIgeDI9IjIyIiB5MT0iMiIgeTI9IjIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/flashlight-off
 */
export const FlashlightOffIcon = createIcon('flashlight-off', __iconNode);
