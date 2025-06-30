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
      "d": "m21 3-6 6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m21 9-6-6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 11.5V15"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "18",
      "r": "3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI2IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNNiA5djEyIiAvPgogIDxwYXRoIGQ9Im0yMSAzLTYgNiIgLz4KICA8cGF0aCBkPSJtMjEgOS02LTYiIC8+CiAgPHBhdGggZD0iTTE4IDExLjVWMTUiIC8+CiAgPGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/git-pull-request-closed
 */
export const GitPullRequestClosedIcon = createIcon('git-pull-request-closed', __iconNode);
