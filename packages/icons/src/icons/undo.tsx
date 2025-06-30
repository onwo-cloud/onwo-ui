import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M3 7v6h6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA3djZoNiIgLz4KICA8cGF0aCBkPSJNMjEgMTdhOSA5IDAgMCAwLTktOSA5IDkgMCAwIDAtNiAyLjNMMyAxMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/undo
 */
export const UndoIcon = createIcon('undo', __iconNode);
