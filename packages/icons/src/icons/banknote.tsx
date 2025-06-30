import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "12",
      "x": "2",
      "y": "6",
      "rx": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M6 12h.01M18 12h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjYiIHJ4PSIyIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+CiAgPHBhdGggZD0iTTYgMTJoLjAxTTE4IDEyaC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/banknote
 */
export const BanknoteIcon = createIcon('banknote', __iconNode);
