import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "18",
      "r": "3"
    }
  },
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
      "d": "M18 6V5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 11v-1"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "6",
      "x2": "6",
      "y1": "9",
      "y2": "21"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIzIiAvPgogIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSIzIiAvPgogIDxwYXRoIGQ9Ik0xOCA2VjUiIC8+CiAgPHBhdGggZD0iTTE4IDExdi0xIiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNiIgeTE9IjkiIHkyPSIyMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/git-pull-request-draft
 */
export const GitPullRequestDraftIcon = createIcon('git-pull-request-draft', __iconNode);
