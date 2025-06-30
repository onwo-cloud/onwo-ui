import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "14",
      "x": "2",
      "y": "5",
      "rx": "2"
    }
  },
  {
    "tag": "line",
    "attr": {
      "x1": "2",
      "x2": "22",
      "y1": "10",
      "y2": "10"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjUiIHJ4PSIyIiAvPgogIDxsaW5lIHgxPSIyIiB4Mj0iMjIiIHkxPSIxMCIgeTI9IjEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/credit-card
 */
export const CreditCardIcon = createIcon('credit-card', __iconNode);
