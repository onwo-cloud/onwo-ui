import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "8",
      "height": "5",
      "x": "14",
      "y": "17",
      "rx": "1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M20 17v-2a2 2 0 1 0-4 0v2"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI1IiB4PSIxNCIgeT0iMTciIHJ4PSIxIiAvPgogIDxwYXRoIGQ9Ik0xMCAyMEg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDMuOWEyIDIgMCAwIDEgMS42OS45bC44MSAxLjJhMiAyIDAgMCAwIDEuNjcuOUgyMGEyIDIgMCAwIDEgMiAydjIuNSIgLz4KICA8cGF0aCBkPSJNMjAgMTd2LTJhMiAyIDAgMSAwLTQgMHYyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/folder-lock
 */
export const FolderLockIcon = createIcon('folder-lock', __iconNode);
