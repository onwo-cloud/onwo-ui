import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 2v4a2 2 0 0 0 2 2h4"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "5",
      "x": "2",
      "y": "13",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 13v-2a2 2 0 1 0-4 0v2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAyMmgxNGEyIDIgMCAwIDAgMi0yVjdsLTUtNUg2YTIgMiAwIDAgMC0yIDJ2MSIgLz4KICA8cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCIgLz4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI1IiB4PSIyIiB5PSIxMyIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTggMTN2LTJhMiAyIDAgMSAwLTQgMHYyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-lock-2
 */
export const FileLock2Icon = createIcon('file-lock-2', __iconNode);
