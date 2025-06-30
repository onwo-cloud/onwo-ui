import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M3 2h18"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "18",
      "height": "12",
      "x": "3",
      "y": "6",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 22h18"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAyaDE4IiAvPgogIDxyZWN0IHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIgeD0iMyIgeT0iNiIgcng9IjIiIC8+CiAgPHBhdGggZD0iTTMgMjJoMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/gallery-vertical
 */
export const GalleryVerticalIcon = createIcon('gallery-vertical', __iconNode);
