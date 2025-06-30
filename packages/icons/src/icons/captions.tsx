import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "14",
      "x": "3",
      "y": "5",
      "rx": "2",
      "ry": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 15h4M15 15h2M7 11h2M13 11h4"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHg9IjMiIHk9IjUiIHJ4PSIyIiByeT0iMiIgLz4KICA8cGF0aCBkPSJNNyAxNWg0TTE1IDE1aDJNNyAxMWgyTTEzIDExaDQiIC8+Cjwvc3ZnPg==) - https://lucide.dev/icons/captions
 */
export const CaptionsIcon = createIcon('captions', __iconNode);
