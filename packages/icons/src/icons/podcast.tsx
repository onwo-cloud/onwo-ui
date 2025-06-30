import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16.85 18.58a9 9 0 1 0-9.7 0"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 14a5 5 0 1 1 8 0"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "11",
      "r": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYuODUgMTguNThhOSA5IDAgMSAwLTkuNyAwIiAvPgogIDxwYXRoIGQ9Ik04IDE0YTUgNSAwIDEgMSA4IDAiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMSIgLz4KICA8cGF0aCBkPSJNMTMgMTdhMSAxIDAgMSAwLTIgMGwuNSA0LjVhLjUuNSAwIDEgMCAxIDBaIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/podcast
 */
export const PodcastIcon = createIcon('podcast', __iconNode);
