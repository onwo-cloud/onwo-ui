import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m7 7 10 10-5 5V2l5 5L7 17"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "18",
      "x2": "21",
      "y1": "12",
      "y2": "12"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "3",
      "x2": "6",
      "y1": "12",
      "y2": "12"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNyA3IDEwIDEwLTUgNVYybDUgNUw3IDE3IiAvPgogIDxsaW5lIHgxPSIxOCIgeDI9IjIxIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMyIgeDI9IjYiIHkxPSIxMiIgeTI9IjEyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bluetooth-connected
 */
export const BluetoothConnectedIcon = createIcon('bluetooth-connected', __iconNode);
