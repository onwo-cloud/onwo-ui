import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgM2gzYTEgMSAwIDAgMSAxIDF2MTZhMSAxIDAgMCAxLTEgMWgtMyIgLz4KICA8cGF0aCBkPSJNOCAyMUg1YTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xaDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/brackets
 */
export const BracketsIcon = createIcon('brackets', __iconNode);
