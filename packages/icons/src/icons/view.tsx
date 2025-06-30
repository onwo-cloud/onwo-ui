import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "12",
      "cy": "12",
      "r": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTd2MmEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtMiIgLz4KICA8cGF0aCBkPSJNMjEgN1Y1YTIgMiAwIDAgMC0yLTJINWEyIDIgMCAwIDAtMiAydjIiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMSIgLz4KICA8cGF0aCBkPSJNMTguOTQ0IDEyLjMzYTEgMSAwIDAgMCAwLS42NiA3LjUgNy41IDAgMCAwLTEzLjg4OCAwIDEgMSAwIDAgMCAwIC42NiA3LjUgNy41IDAgMCAwIDEzLjg4OCAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/view
 */
export const ViewIcon = createIcon('view', __iconNode);
