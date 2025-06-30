import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 22h1a4 4 0 0 0 4-4v-1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 2h1a4 4 0 0 1 4 4v1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTcgMjJoLTFhNCA0IDAgMCAxLTQtNFY2YTQgNCAwIDAgMSA0LTRoMSIgLz4KICA8cGF0aCBkPSJNNyAyMmgxYTQgNCAwIDAgMCA0LTR2LTEiIC8+CiAgPHBhdGggZD0iTTcgMmgxYTQgNCAwIDAgMSA0IDR2MSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/text-cursor
 */
export const TextCursorIcon = createIcon('text-cursor', __iconNode);
