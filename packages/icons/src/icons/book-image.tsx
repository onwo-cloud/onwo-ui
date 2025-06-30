import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "10",
      "cy": "8",
      "r": "2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjAgMTMuNy0yLjEtMi4xYTIgMiAwIDAgMC0yLjggMEw5LjcgMTciIC8+CiAgPHBhdGggZD0iTTQgMTkuNXYtMTVBMi41IDIuNSAwIDAgMSA2LjUgMkgxOWExIDEgMCAwIDEgMSAxdjE4YTEgMSAwIDAgMS0xIDFINi41YTEgMSAwIDAgMSAwLTVIMjAiIC8+CiAgPGNpcmNsZSBjeD0iMTAiIGN5PSI4IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-image
 */
export const BookImageIcon = createIcon('book-image', __iconNode);
