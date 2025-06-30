import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.072"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 2v4a2 2 0 0 0 2 2h4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m6.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "5",
      "cy": "14",
      "r": "3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjJoNmEyIDIgMCAwIDAgMi0yVjdsLTUtNUg2YTIgMiAwIDAgMC0yIDJ2My4wNzIiIC8+CiAgPHBhdGggZD0iTTE0IDJ2NGEyIDIgMCAwIDAgMiAyaDQiIC8+CiAgPHBhdGggZD0ibTYuNjkgMTYuNDc5IDEuMjkgNC44OGEuNS41IDAgMCAxLS42OTguNTkxbC0xLjg0My0uODQ5YTEgMSAwIDAgMC0uODguMDAxbC0xLjg0Ni44NWEuNS41IDAgMCAxLS42OTMtLjU5M2wxLjI5LTQuODgiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjE0IiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-badge
 */
export const FileBadgeIcon = createIcon('file-badge', __iconNode);
