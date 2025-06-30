import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M16 14v2.2l1.6 1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "16",
      "cy": "16",
      "r": "6"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMTR2Mi4ybDEuNiAxIiAvPgogIDxwYXRoIGQ9Ik03IDIwSDRhMiAyIDAgMCAxLTItMlY1YTIgMiAwIDAgMSAyLTJoMy45YTIgMiAwIDAgMSAxLjY5LjlsLjgxIDEuMmEyIDIgMCAwIDAgMS42Ny45SDIwYTIgMiAwIDAgMSAyIDIiIC8+CiAgPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/folder-clock
 */
export const FolderClockIcon = createIcon('folder-clock', __iconNode);
