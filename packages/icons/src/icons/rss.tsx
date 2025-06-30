import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M4 11a9 9 0 0 1 9 9"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 4a16 16 0 0 1 16 16"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "5",
      "cy": "19",
      "r": "1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxMWE5IDkgMCAwIDEgOSA5IiAvPgogIDxwYXRoIGQ9Ik00IDRhMTYgMTYgMCAwIDEgMTYgMTYiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjE5IiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/rss
 */
export const RssIcon = createIcon('rss', __iconNode);
