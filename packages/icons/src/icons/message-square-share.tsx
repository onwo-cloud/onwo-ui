import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 3h5v5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m16 8 5-5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJ2M2EyIDIgMCAwIDEtMiAySDdsLTQgNFY1YTIgMiAwIDAgMSAyLTJoNyIgLz4KICA8cGF0aCBkPSJNMTYgM2g1djUiIC8+CiAgPHBhdGggZD0ibTE2IDggNS01IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/message-square-share
 */
export const MessageSquareShareIcon = createIcon('message-square-share', __iconNode);
