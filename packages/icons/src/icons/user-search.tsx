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
    "tag": "circle",
    "attr": {
      "cx": "17",
      "cy": "17",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m21 21-1.9-1.9"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjciIHI9IjQiIC8+CiAgPHBhdGggZD0iTTEwLjMgMTVIN2E0IDQgMCAwIDAtNCA0djIiIC8+CiAgPGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMyIgLz4KICA8cGF0aCBkPSJtMjEgMjEtMS45LTEuOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/user-search
 */
export const UserSearchIcon = createIcon('user-search', __iconNode);
