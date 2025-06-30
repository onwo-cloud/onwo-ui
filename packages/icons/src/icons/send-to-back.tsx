import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "x": "14",
      "y": "14",
      "width": "8",
      "height": "8",
      "rx": "2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "x": "2",
      "y": "2",
      "width": "8",
      "height": "8",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M7 14v1a2 2 0 0 0 2 2h1"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M14 7h1a2 2 0 0 1 2 2v1"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIxNCIgeT0iMTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIyIiAvPgogIDxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Ik03IDE0djFhMiAyIDAgMCAwIDIgMmgxIiAvPgogIDxwYXRoIGQ9Ik0xNCA3aDFhMiAyIDAgMCAxIDIgMnYxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/send-to-back
 */
export const SendToBackIcon = createIcon('send-to-back', __iconNode);
