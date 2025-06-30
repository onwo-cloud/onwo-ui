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
      "d": "M5 9v12"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "19",
      "cy": "18",
      "r": "3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m15 9-3-3 3-3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 6h5a2 2 0 0 1 2 2v7"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNNSA5djEyIiAvPgogIDxjaXJjbGUgY3g9IjE5IiBjeT0iMTgiIHI9IjMiIC8+CiAgPHBhdGggZD0ibTE1IDktMy0zIDMtMyIgLz4KICA8cGF0aCBkPSJNMTIgNmg1YTIgMiAwIDAgMSAyIDJ2NyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/git-pull-request-arrow
 */
export const GitPullRequestArrowIcon = createIcon('git-pull-request-arrow', __iconNode);
