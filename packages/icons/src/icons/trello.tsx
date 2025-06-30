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
      "rx": "2",
      "ry": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "3",
      "height": "9",
      "x": "7",
      "y": "7"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "3",
      "height": "5",
      "x": "14",
      "y": "7"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIiByeT0iMiIgLz4KICA8cmVjdCB3aWR0aD0iMyIgaGVpZ2h0PSI5IiB4PSI3IiB5PSI3IiAvPgogIDxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjUiIHg9IjE0IiB5PSI3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trello
 * @deprecated icon.brand
 */
export const TrelloIcon = createIcon('trello', __iconNode);
