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
    "tag": "path",
    "attr": {
      "d": "m15 9-3-3 3-3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 6h5a2 2 0 0 1 2 2v3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M19 15v6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 18h-6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNiIgcj0iMyIgLz4KICA8cGF0aCBkPSJNNSA5djEyIiAvPgogIDxwYXRoIGQ9Im0xNSA5LTMtMyAzLTMiIC8+CiAgPHBhdGggZD0iTTEyIDZoNWEyIDIgMCAwIDEgMiAydjMiIC8+CiAgPHBhdGggZD0iTTE5IDE1djYiIC8+CiAgPHBhdGggZD0iTTIyIDE4aC02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/git-pull-request-create-arrow
 */
export const GitPullRequestCreateArrowIcon = createIcon(
  'git-pull-request-create-arrow',
  __iconNode,
);
