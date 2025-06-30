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
      "d": "M4 8v11a2 2 0 0 0 2 2h2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M20 8v11a2 2 0 0 1-2 2h-2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9 15 3-3 3 3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M12 12v9"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iNSIgeD0iMiIgeT0iMyIgcng9IjEiIC8+CiAgPHBhdGggZD0iTTQgOHYxMWEyIDIgMCAwIDAgMiAyaDIiIC8+CiAgPHBhdGggZD0iTTIwIDh2MTFhMiAyIDAgMCAxLTIgMmgtMiIgLz4KICA8cGF0aCBkPSJtOSAxNSAzLTMgMyAzIiAvPgogIDxwYXRoIGQ9Ik0xMiAxMnY5IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/archive-restore
 */
export const ArchiveRestoreIcon = createIcon('archive-restore', __iconNode);
