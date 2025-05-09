type Field = Record<string, any> | string; // classes passed to @apply.

const base: Record<string, Field> = {
  color: 'text-ink',
  '> *': 'first:mt-0 last:mb-0',
  h1: 'text-onwo-32 font-semibold mt-12',
  h2: 'border-b pb-1 border-line text-onwo-24 font-medium mt-10',
  h3: 'text-onwo-20 font-medium mt-8',
  h4: 'text-onwo-16 font-bold mt-6',
  'h4, h5, h6, p, ul, ol': 'mt-6',
  li: 'mt-2',
  'li:first': 'mt-0',
  'h1, h2, h3': {
    ['@apply tracking-tight scroll-m-20']: {},
    '& + *': {
      ['@apply mt-6']: {},
    },
  },
  p: 'text-onwo-16',
  a: 'cursor-pointer',
  'p > a':
    'text-accent font-medium transition-colors duration-200 hover:text-accent visited:text-accent cursor-pointer',
  pre: 'bg-parchment p-4 text-onwo-14 text-ink rounded-onwo-s-sm whitespace-pre-line mt-4',
  ul: 'list-inside list-disc text-onwo-16',
};

const convertField = (field: Field) => {
  if (typeof field === 'string') {
    return { [`@apply ${field}`]: {} };
  } else {
    return field;
  }
};

export const styles = Object.fromEntries(
  Object.entries(base).map(([k, v]) => [k, convertField(v)]),
);
