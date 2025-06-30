import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "10",
      "cy": "7",
      "r": "4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10.3 15H7a4 4 0 0 0-4 4v2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M15 15.5V14a2 2 0 0 1 4 0v1.5"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "5",
      "x": "13",
      "y": "16",
      "rx": ".899"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjciIHI9IjQiIC8+CiAgPHBhdGggZD0iTTEwLjMgMTVIN2E0IDQgMCAwIDAtNCA0djIiIC8+CiAgPHBhdGggZD0iTTE1IDE1LjVWMTRhMiAyIDAgMCAxIDQgMHYxLjUiIC8+CiAgPHJlY3Qgd2lkdGg9IjgiIGhlaWdodD0iNSIgeD0iMTMiIHk9IjE2IiByeD0iLjg5OSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user-lock
 */
export const UserLockIcon = createIcon('user-lock', __iconNode);
