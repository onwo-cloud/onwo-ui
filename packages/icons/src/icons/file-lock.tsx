import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "6",
      "x": "8",
      "y": "12",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 12v-2a2 2 0 1 1 4 0v2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMkg2YTIgMiAwIDAgMC0yIDJ2MTZhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjdaIiAvPgogIDxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjYiIHg9IjgiIHk9IjEyIiByeD0iMSIgLz4KICA8cGF0aCBkPSJNMTAgMTJ2LTJhMiAyIDAgMSAxIDQgMHYyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-lock
 */
export const FileLockIcon = createIcon('file-lock', __iconNode);
