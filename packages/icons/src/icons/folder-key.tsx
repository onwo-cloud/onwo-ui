import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "circle",
    "attr": {
      "cx": "16",
      "cy": "20",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m22 14-4.5 4.5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m21 15 1 1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjIwIiByPSIyIiAvPgogIDxwYXRoIGQ9Ik0xMCAyMEg0YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDMuOWEyIDIgMCAwIDEgMS42OS45bC44MSAxLjJhMiAyIDAgMCAwIDEuNjcuOUgyMGEyIDIgMCAwIDEgMiAydjIiIC8+CiAgPHBhdGggZD0ibTIyIDE0LTQuNSA0LjUiIC8+CiAgPHBhdGggZD0ibTIxIDE1IDEgMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/folder-key
 */
export const FolderKeyIcon = createIcon('folder-key', __iconNode);
