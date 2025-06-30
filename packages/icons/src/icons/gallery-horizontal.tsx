import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M2 3v18"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "12",
      "height": "18",
      "x": "6",
      "y": "3",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M22 3v18"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiAzdjE4IiAvPgogIDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxOCIgeD0iNiIgeT0iMyIgcng9IjIiIC8+CiAgPHBhdGggZD0iTTIyIDN2MTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/gallery-horizontal
 */
export const GalleryHorizontalIcon = createIcon('gallery-horizontal', __iconNode);
