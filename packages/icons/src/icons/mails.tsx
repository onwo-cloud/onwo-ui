import type { IconNode } from '../create-icon';
import { createIcon } from '../create-icon';

// prettier-ignore
export const __iconNode: IconNode[] = [
  {
    "tag": "rect",
    "attr": {
      "width": "16",
      "height": "13",
      "x": "6",
      "y": "4",
      "rx": "2"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
    }
  },
  {
    "tag": "path",
    "attr": {
      "d": "M2 8v11c0 1.1.9 2 2 2h14"
    }
  }
];

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB3aWR0aD0iMjQiCiAgaGVpZ2h0PSIyNCIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgZmlsbD0ibm9uZSIKICBzdHJva2U9ImN1cnJlbnRDb2xvciIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMTMiIHg9IjYiIHk9IjQiIHJ4PSIyIiAvPgogIDxwYXRoIGQ9Im0yMiA3LTcuMSAzLjc4Yy0uNTcuMy0xLjIzLjMtMS44IDBMNiA3IiAvPgogIDxwYXRoIGQ9Ik0yIDh2MTFjMCAxLjEuOSAyIDIgMmgxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mails
 */
export const MailsIcon = createIcon('mails', __iconNode);
