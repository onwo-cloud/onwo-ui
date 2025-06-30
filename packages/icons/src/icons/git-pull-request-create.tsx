import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "6",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 9v12"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M13 6h3a2 2 0 0 1 2 2v3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 15v6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 18h-6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNNiA5djEyIiAvPgogIDxwYXRoIGQ9Ik0xMyA2aDNhMiAyIDAgMCAxIDIgMnYzIiAvPgogIDxwYXRoIGQ9Ik0xOCAxNXY2IiAvPgogIDxwYXRoIGQ9Ik0yMSAxOGgtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/git-pull-request-create
 */
export const GitPullRequestCreateIcon = createIcon('git-pull-request-create', __iconNode);
