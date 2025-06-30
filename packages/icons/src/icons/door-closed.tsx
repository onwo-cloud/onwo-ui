import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M10 12h.01"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2 20h20"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTJoLjAxIiAvPgogIDxwYXRoIGQ9Ik0xOCAyMFY2YTIgMiAwIDAgMC0yLTJIOGEyIDIgMCAwIDAtMiAydjE0IiAvPgogIDxwYXRoIGQ9Ik0yIDIwaDIwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/door-closed
 */
export const DoorClosedIcon = createIcon('door-closed', __iconNode);
