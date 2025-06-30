import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "12",
      "height": "20",
      "x": "6",
      "y": "2",
      "rx": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "12",
      "x": "2",
      "y": "6",
      "rx": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMjAiIHg9IjYiIHk9IjIiIHJ4PSIyIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxMiIgeD0iMiIgeT0iNiIgcng9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/ratio
 */
export const RatioIcon = createIcon('ratio', __iconNode);
