import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "5",
      "cy": "6",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 9v6"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "5",
      "cy": "18",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 3v18"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "19",
      "cy": "6",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 15.7A9 9 0 0 0 19 9"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNNSA5djYiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjE4IiByPSIzIiAvPgogIDxwYXRoIGQ9Ik0xMiAzdjE4IiAvPgogIDxjaXJjbGUgY3g9IjE5IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNMTYgMTUuN0E5IDkgMCAwIDAgMTkgOSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/git-graph
 */
export const GitGraphIcon = createIcon('git-graph', __iconNode);
