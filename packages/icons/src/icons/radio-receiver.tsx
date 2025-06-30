import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M5 16v2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M19 16v2"
    }
  },
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "8",
      "x": "2",
      "y": "8",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 12h.01"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxNnYyIiAvPgogIDxwYXRoIGQ9Ik0xOSAxNnYyIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSI4IiByeD0iMiIgLz4KICA8cGF0aCBkPSJNMTggMTJoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/radio-receiver
 */
export const RadioReceiverIcon = createIcon('radio-receiver', __iconNode);
