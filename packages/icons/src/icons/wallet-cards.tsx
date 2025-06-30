import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "18",
      "x": "3",
      "y": "3",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik0zIDlhMiAyIDAgMCAxIDItMmgxNGEyIDIgMCAwIDEgMiAyIiAvPgogIDxwYXRoIGQ9Ik0zIDExaDNjLjggMCAxLjYuMyAyLjEuOWwxLjEuOWMxLjYgMS42IDQuMSAxLjYgNS43IDBsMS4xLS45Yy41LS41IDEuMy0uOSAyLjEtLjlIMjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/wallet-cards
 */
export const WalletCardsIcon = createIcon('wallet-cards', __iconNode);
