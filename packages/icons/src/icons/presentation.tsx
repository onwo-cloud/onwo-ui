import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "path",
    "attr": {
      "d": "M2 3h20"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m7 21 5-5 5 5"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiAzaDIwIiAvPgogIDxwYXRoIGQ9Ik0yMSAzdjExYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yVjMiIC8+CiAgPHBhdGggZD0ibTcgMjEgNS01IDUgNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/presentation
 */
export const PresentationIcon = createIcon('presentation', __iconNode);
