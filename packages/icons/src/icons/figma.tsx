import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSA1LjVBMy41IDMuNSAwIDAgMSA4LjUgMkgxMnY3SDguNUEzLjUgMy41IDAgMCAxIDUgNS41eiIgLz4KICA8cGF0aCBkPSJNMTIgMmgzLjVhMy41IDMuNSAwIDEgMSAwIDdIMTJWMnoiIC8+CiAgPHBhdGggZD0iTTEyIDEyLjVhMy41IDMuNSAwIDEgMSA3IDAgMy41IDMuNSAwIDEgMS03IDB6IiAvPgogIDxwYXRoIGQ9Ik01IDE5LjVBMy41IDMuNSAwIDAgMSA4LjUgMTZIMTJ2My41YTMuNSAzLjUgMCAxIDEtNyAweiIgLz4KICA8cGF0aCBkPSJNNSAxMi41QTMuNSAzLjUgMCAwIDEgOC41IDlIMTJ2N0g4LjVBMy41IDMuNSAwIDAgMSA1IDEyLjV6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/figma
 * @deprecated icon.brand
 */
export const FigmaIcon = createIcon('figma', __iconNode);
