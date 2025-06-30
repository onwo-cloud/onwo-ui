import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M20 7h-3a2 2 0 0 1-2-2V2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgN2gtM2EyIDIgMCAwIDEtMi0yVjIiIC8+CiAgPHBhdGggZD0iTTkgMThhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoN2w0IDR2MTBhMiAyIDAgMCAxLTIgMloiIC8+CiAgPHBhdGggZD0iTTMgNy42djEyLjhBMS42IDEuNiAwIDAgMCA0LjYgMjJoOS44IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/files
 */
export const FilesIcon = createIcon('files', __iconNode);
