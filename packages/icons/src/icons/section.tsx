import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgNWE0IDMgMCAwIDAtOCAwYzAgNCA4IDMgOCA3YTQgMyAwIDAgMS04IDAiIC8+CiAgPHBhdGggZD0iTTggMTlhNCAzIDAgMCAwIDggMGMwLTQtOC0zLTgtN2E0IDMgMCAwIDEgOCAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/section
 */
export const SectionIcon = createIcon('section', __iconNode);
