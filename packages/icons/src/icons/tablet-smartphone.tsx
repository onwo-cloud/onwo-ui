import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "10",
      "height": "14",
      "x": "3",
      "y": "8",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 18h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTQiIHg9IjMiIHk9IjgiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik01IDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjE2YTIgMiAwIDAgMS0yIDJoLTIuNCIgLz4KICA8cGF0aCBkPSJNOCAxOGguMDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/tablet-smartphone
 */
export const TabletSmartphoneIcon = createIcon('tablet-smartphone', __iconNode);
