import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "4",
      "x": "8",
      "y": "2",
      "rx": "1",
      "ry": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 4h2a2 2 0 0 1 2 2v4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 14H11"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m15 10-4 4 4 4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiIC8+CiAgPHBhdGggZD0iTTggNEg2YTIgMiAwIDAgMC0yIDJ2MTRhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0ydi0yIiAvPgogIDxwYXRoIGQ9Ik0xNiA0aDJhMiAyIDAgMCAxIDIgMnY0IiAvPgogIDxwYXRoIGQ9Ik0yMSAxNEgxMSIgLz4KICA8cGF0aCBkPSJtMTUgMTAtNCA0IDQgNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clipboard-copy
 */
export const ClipboardCopyIcon = createIcon('clipboard-copy', __iconNode);
