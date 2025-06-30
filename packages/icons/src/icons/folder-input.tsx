import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2 13h10"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m9 16 3-3-3-3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA5VjVhMiAyIDAgMCAxIDItMmgzLjlhMiAyIDAgMCAxIDEuNjkuOWwuODEgMS4yYTIgMiAwIDAgMCAxLjY3LjlIMjBhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnYtMSIgLz4KICA8cGF0aCBkPSJNMiAxM2gxMCIgLz4KICA8cGF0aCBkPSJtOSAxNiAzLTMtMy0zIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/folder-input
 */
export const FolderInputIcon = createIcon('folder-input', __iconNode);
