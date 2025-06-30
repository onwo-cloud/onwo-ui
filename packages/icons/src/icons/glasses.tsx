import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "6",
      "cy": "15",
      "r": "4"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "18",
      "cy": "15",
      "r": "4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2.5 13 5 7c.7-1.3 1.4-2 3-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI2IiBjeT0iMTUiIHI9IjQiIC8+CiAgPGNpcmNsZSBjeD0iMTgiIGN5PSIxNSIgcj0iNCIgLz4KICA8cGF0aCBkPSJNMTQgMTVhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAyIiAvPgogIDxwYXRoIGQ9Ik0yLjUgMTMgNSA3Yy43LTEuMyAxLjQtMiAzLTIiIC8+CiAgPHBhdGggZD0iTTIxLjUgMTMgMTkgN2MtLjctMS4zLTEuNS0yLTMtMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/glasses
 */
export const GlassesIcon = createIcon('glasses', __iconNode);
