import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
    }
  },
  {
    "tag": "polyline",
    "attr": {
      "points": "15,9 18,9 18,11"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "6",
      "x2": "7",
      "y1": "10",
      "y2": "10"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTdhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWOS41QzIgNyA0IDUgNi41IDVIMThjMi4yIDAgNCAxLjggNCA0djhaIiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjE1LDkgMTgsOSAxOCwxMSIgLz4KICA8cGF0aCBkPSJNNi41IDVDOSA1IDExIDcgMTEgOS41VjE3YTIgMiAwIDAgMS0yIDIiIC8+CiAgPGxpbmUgeDE9IjYiIHgyPSI3IiB5MT0iMTAiIHkyPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mailbox
 */
export const MailboxIcon = createIcon('mailbox', __iconNode);
