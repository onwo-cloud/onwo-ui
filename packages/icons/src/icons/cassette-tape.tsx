import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "20",
      "height": "16",
      "x": "2",
      "y": "4",
      "rx": "2"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "8",
      "cy": "10",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M8 12h8"
    }
  },
  {
    "tag": "circle",
    "attr": {
      "cx": "16",
      "cy": "10",
      "r": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIiAvPgogIDxjaXJjbGUgY3g9IjgiIGN5PSIxMCIgcj0iMiIgLz4KICA8cGF0aCBkPSJNOCAxMmg4IiAvPgogIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTAiIHI9IjIiIC8+CiAgPHBhdGggZD0ibTYgMjAgLjctMi45QTEuNCAxLjQgMCAwIDEgOC4xIDE2aDcuOGExLjQgMS40IDAgMCAxIDEuNCAxbC43IDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/cassette-tape
 */
export const CassetteTapeIcon = createIcon('cassette-tape', __iconNode);
