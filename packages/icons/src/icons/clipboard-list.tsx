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
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 11h4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 16h4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 11h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 16h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB4PSI4IiB5PSIyIiByeD0iMSIgcnk9IjEiIC8+CiAgPHBhdGggZD0iTTE2IDRoMmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJINmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgyIiAvPgogIDxwYXRoIGQ9Ik0xMiAxMWg0IiAvPgogIDxwYXRoIGQ9Ik0xMiAxNmg0IiAvPgogIDxwYXRoIGQ9Ik04IDExaC4wMSIgLz4KICA8cGF0aCBkPSJNOCAxNmguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/clipboard-list
 */
export const ClipboardListIcon = createIcon('clipboard-list', __iconNode);
