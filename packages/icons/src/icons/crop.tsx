import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M6 2v14a2 2 0 0 0 2 2h14"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 22V8a2 2 0 0 0-2-2H2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAydjE0YTIgMiAwIDAgMCAyIDJoMTQiIC8+CiAgPHBhdGggZD0iTTE4IDIyVjhhMiAyIDAgMCAwLTItMkgyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/crop
 */
export const CropIcon = createIcon('crop', __iconNode);
