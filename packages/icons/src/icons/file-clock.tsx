import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M14 2v4a2 2 0 0 0 2 2h4"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 14v2.2l1.6 1"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "16",
      "r": "6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCIgLz4KICA8cGF0aCBkPSJNMTYgMjJoMmEyIDIgMCAwIDAgMi0yVjdsLTUtNUg2YTIgMiAwIDAgMC0yIDJ2MyIgLz4KICA8cGF0aCBkPSJNOCAxNHYyLjJsMS42IDEiIC8+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjE2IiByPSI2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-clock
 */
export const FileClockIcon = createIcon('file-clock', __iconNode);
