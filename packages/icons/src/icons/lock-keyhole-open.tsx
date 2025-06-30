import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "16",
      "r": "1"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "12",
      "x": "3",
      "y": "10",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 10V7a5 5 0 0 1 9.33-2.5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjE2IiByPSIxIiAvPgogIDxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIgeD0iMyIgeT0iMTAiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik03IDEwVjdhNSA1IDAgMCAxIDkuMzMtMi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/lock-keyhole-open
 */
export const LockKeyholeOpenIcon = createIcon('lock-keyhole-open', __iconNode);
