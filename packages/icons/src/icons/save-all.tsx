import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M10 2v3a1 1 0 0 0 1 1h5"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M18 22H4a2 2 0 0 1-2-2V6"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMnYzYTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJNMTggMTh2LTZhMSAxIDAgMCAwLTEtMWgtNmExIDEgMCAwIDAtMSAxdjYiIC8+CiAgPHBhdGggZD0iTTE4IDIySDRhMiAyIDAgMCAxLTItMlY2IiAvPgogIDxwYXRoIGQ9Ik04IDE4YTIgMiAwIDAgMS0yLTJWNGEyIDIgMCAwIDEgMi0yaDkuMTcyYTIgMiAwIDAgMSAxLjQxNC41ODZsMi44MjggMi44MjhBMiAyIDAgMCAxIDIyIDYuODI4VjE2YTIgMiAwIDAgMS0yLjAxIDJ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/save-all
 */
export const SaveAllIcon = createIcon('save-all', __iconNode);
