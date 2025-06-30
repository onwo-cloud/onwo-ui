import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "10",
      "cy": "16",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m16 10-4.5 4.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m15 11 1 1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTYiIHI9IjIiIC8+CiAgPHBhdGggZD0ibTE2IDEwLTQuNSA0LjUiIC8+CiAgPHBhdGggZD0ibTE1IDExIDEgMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file-key
 */
export const FileKeyIcon = createIcon('file-key', __iconNode);
