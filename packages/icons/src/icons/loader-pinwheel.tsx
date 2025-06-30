import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "10"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTJhMSAxIDAgMCAxLTEwIDAgMSAxIDAgMCAwLTEwIDAiIC8+CiAgPHBhdGggZD0iTTcgMjAuN2ExIDEgMCAxIDEgNS04LjcgMSAxIDAgMSAwIDUtOC42IiAvPgogIDxwYXRoIGQ9Ik03IDMuM2ExIDEgMCAxIDEgNSA4LjYgMSAxIDAgMSAwIDUgOC42IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/loader-pinwheel
 */
export const LoaderPinwheelIcon = createIcon('loader-pinwheel', __iconNode);
