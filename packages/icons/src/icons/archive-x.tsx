import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "5",
      "x": "2",
      "y": "3",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9.5 17 5-5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9.5 12 5 5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iNSIgeD0iMiIgeT0iMyIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTQgOHYxMWEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWOCIgLz4KICA8cGF0aCBkPSJtOS41IDE3IDUtNSIgLz4KICA8cGF0aCBkPSJtOS41IDEyIDUgNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/archive-x
 */
export const ArchiveXIcon = createIcon('archive-x', __iconNode);
