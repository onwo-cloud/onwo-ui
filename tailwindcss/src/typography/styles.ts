type Field = Record<string, any> | string; // classes passed to @apply.

const base: Record<string, Field> = {
  color: 'text-bulma',
  '> *': 'first:mt-0 last:mb-0',
  h1: 'text-onwo-32 font-semibold mt-12',
  h2: 'border-b pb-1 border-beerus text-onwo-24 font-medium mt-10',
  h3: 'text-onwo-20 font-medium mt-8',
  h4: 'text-onwo-16 font-bold mt-6',
  'h4, h5, h6, p, ul, ol': 'mt-6',
  'li': 'mt-4',
  'li:first': 'mt-0',
  'h1, h2, h3': {
    ['@apply tracking-tight scroll-m-20']: {},
    '& + *': {
      ['@apply mt-6']: {}
    }
  },
  p: 'text-onwo-16',
  a: 'cursor-pointer',
  'p > a':
    'text-piccolo font-medium transition-colors duration-200 hover:text-hit visited:text-hit cursor-pointer',
  pre: 'bg-gohan overflow-scroll overflow-x-auto p-4 text-onwo-14 text-bulma rounded-onwo-s-sm whitespace-pre-line mt-4',
  ul: 'list-inside list-disc text-onwo-16',
};

////maxWidth: '65ch',
//p: {}, // Required to maintain correct order when merging
//'[class~="lead"]': {
//  color: 'rgb(var(--trunks))',
//},
//a: {
//  color: 'var(--piccolo)',
//  textDecoration: 'underline',
//  fontWeight: '500',
//},
//strong: {
//  fontWeight: '600',
//},
//'a strong': {
//  color: 'inherit',
//},
//'blockquote strong': {
//  color: 'inherit',
//},
//'thead th strong': {
//  color: 'inherit',
//},
//ol: {
//  listStyleType: 'decimal',
//},
//'ol[type="A"]': {
//  listStyleType: 'upper-alpha',
//},
//'ol[type="a"]': {
//  listStyleType: 'lower-alpha',
//},
//'ol[type="A" s]': {
//  listStyleType: 'upper-alpha',
//},
//'ol[type="a" s]': {
//  listStyleType: 'lower-alpha',
//},
//'ol[type="I"]': {
//  listStyleType: 'upper-roman',
//},
//'ol[type="i"]': {
//  listStyleType: 'lower-roman',
//},
//'ol[type="I" s]': {
//  listStyleType: 'upper-roman',
//},
//'ol[type="i" s]': {
//  listStyleType: 'lower-roman',
//},
//'ol[type="1"]': {
//  listStyleType: 'decimal',
//},
//ul: {
//  listStyleType: 'disc',
//},
//'ol > li::marker': {
//  fontWeight: '400',
//},
//dt: {
//  fontWeight: '600',
//},
//hr: {
//  borderColor: 'rgb(var(--beerus))',
//  borderTopWidth: '1px',
//},
//blockquote: {
//  fontWeight: '500',
//  fontStyle: 'italic',
//  borderInlineStartWidth: '0.25rem',
//  borderInlineStartColor: 'var(--beerus)',
//  quotes: '"\\201C""\\201D""\\2018""\\2019"',
//},
//'blockquote p:first-of-type::before': {
//  content: 'open-quote',
//},
//'blockquote p:last-of-type::after': {
//  content: 'close-quote',
//},
//h3: {
//  fontWeight: '600',
//},
//'h3 strong': {
//  fontWeight: '700',
//},
//h4: {
//  fontWeight: '600',
//},
//'h4 strong': {
//  fontWeight: '700',
//},
//img: {}, // Required to maintain correct order when merging
//picture: {
//  display: 'block',
//},
//video: {}, // Required to maintain correct order when merging
//kbd: {
//  fontWeight: '500',
//  fontFamily: 'inherit',
//  boxShadow: '0 0 0 1px rgb(var(--beerus) / 10%), 0 3px 0 rgb(var(--beerus) / 10%)',
//},
//code: {
//  fontWeight: '600',
//},
//'code::before': {
//  content: '"`"',
//},
//'code::after': {
//  content: '"`"',
//},
//pre: {
//  overflowX: 'auto',
//  fontWeight: '400',
//},
//'pre code': {
//  backgroundColor: 'transparent',
//  borderWidth: '0',
//  //borderRadius: '0',
//  padding: '0',
//  fontWeight: 'inherit',
//  fontSize: 'inherit',
//  fontFamily: 'inherit',
//  lineHeight: 'inherit',
//},
//'pre code::before': {
//  content: 'none',
//},
//'pre code::after': {
//  content: 'none',
//},
//table: {
//  width: '100%',
//  tableLayout: 'auto',
//},
//thead: {
//  borderBottomWidth: '1px',
//  borderBottomColor: 'var(--beerus)',
//},
//'thead th': {
//  fontWeight: '600',
//  verticalAlign: 'bottom',
//},
//'tbody tr': {
//  borderBottomWidth: '1px',
//  borderBottomColor: 'var(--beerus)',
//},
//'tbody tr:last-child': {
//  borderBottomWidth: '0',
//},
//'tbody td': {
//  verticalAlign: 'baseline',
//},
//tfoot: {
//  borderTopWidth: '1px',
//  borderTopColor: 'var(--beerus)',
//},
//'tfoot td': {
//  verticalAlign: 'top',
//},
//'th, td': {
//  textAlign: 'start',
//},
//'figure > *': {}, // Required to maintain correct order when merging

//const spacingStyles = {
//  //fontSize: rem(16),
//  lineHeight: round(28 / 16),
//  p: {
//    marginTop: spacing(20),
//    marginBottom: spacing(20),
//  },
//  '[class~="lead"]': {
//    //fontSize: spacing(20),
//    lineHeight: round(32 / 20),
//    marginTop: spacing(24),
//    marginBottom: spacing(24),
//  },
//  blockquote: {
//    marginTop: spacing(32),
//    marginBottom: spacing(32),
//    paddingInlineStart: spacing(20),
//  },
//  h1: {
//    //fontSize: spacing(36),
//    marginTop: '0',
//    marginBottom: spacing(32),
//    lineHeight: round(40 / 36),
//  },
//  h2: {
//    //fontSize: spacing(24),
//    marginTop: spacing(48),
//    marginBottom: spacing(24),
//    lineHeight: round(32 / 24),
//  },
//  h3: {
//    //fontSize: spacing(20),
//    marginTop: spacing(32),
//    marginBottom: spacing(12),
//    lineHeight: round(32 / 20),
//  },
//  h4: {
//    marginTop: spacing(24),
//    marginBottom: spacing(8),
//    lineHeight: round(24 / 16),
//  },
//  img: {
//    marginTop: spacing(32),
//    marginBottom: spacing(32),
//  },
//  picture: {
//    marginTop: spacing(32),
//    marginBottom: spacing(32),
//  },
//  'picture > img': {
//    marginTop: '0',
//    marginBottom: '0',
//  },
//  video: {
//    marginTop: spacing(32),
//    marginBottom: spacing(32),
//  },
//  kbd: {
//    //fontSize: spacing(14),
//    //borderRadius: rem(5),
//    paddingTop: spacing(3),
//    paddingInlineEnd: spacing(6),
//    paddingBottom: spacing(3),
//    paddingInlineStart: spacing(6),
//  },
//  code: {
//    //fontSize: spacing(14),
//  },
//  'h2 code': {
//    //fontSize: spacing(21),
//  },
//  'h3 code': {
//    //fontSize: spacing(18),
//  },
//  pre: {
//    //fontSize: spacing(14),
//    lineHeight: round(24 / 14),
//    marginTop: spacing(24),
//    marginBottom: spacing(24),
//    //borderRadius: rem(6),
//    paddingTop: spacing(12),
//    paddingInlineEnd: spacing(16),
//    paddingBottom: spacing(12),
//    paddingInlineStart: spacing(16),
//  },
//  ol: {
//    marginTop: spacing(20),
//    marginBottom: spacing(20),
//    paddingInlineStart: spacing(26),
//  },
//  ul: {
//    marginTop: spacing(20),
//    marginBottom: spacing(20),
//    paddingInlineStart: spacing(26),
//  },
//  li: {
//    marginTop: spacing(8),
//    marginBottom: spacing(8),
//  },
//  'ol > li': {
//    paddingInlineStart: spacing(6),
//  },
//  'ul > li': {
//    paddingInlineStart: spacing(6),
//  },
//  '> ul > li p': {
//    marginTop: spacing(12),
//    marginBottom: spacing(12),
//  },
//  '> ul > li > p:first-child': {
//    marginTop: spacing(20),
//  },
//  '> ul > li > p:last-child': {
//    marginBottom: spacing(20),
//  },
//  '> ol > li > p:first-child': {
//    marginTop: spacing(20),
//  },
//  '> ol > li > p:last-child': {
//    marginBottom: spacing(20),
//  },
//  'ul ul, ul ol, ol ul, ol ol': {
//    marginTop: spacing(12),
//    marginBottom: spacing(12),
//  },
//  dl: {
//    marginTop: spacing(20),
//    marginBottom: spacing(20),
//  },
//  dt: {
//    marginTop: spacing(20),
//  },
//  dd: {
//    marginTop: spacing(8),
//    paddingInlineStart: spacing(26),
//  },
//  hr: {
//    marginTop: spacing(48),
//    marginBottom: spacing(48),
//  },
//  'hr + *': {
//    marginTop: '0',
//  },
//  'h2 + *': {
//    marginTop: '0',
//  },
//  'h3 + *': {
//    marginTop: '0',
//  },
//  'h4 + *': {
//    marginTop: '0',
//  },
//  table: {
//    //fontSize: spacing(14),
//    lineHeight: round(24 / 14),
//  },
//  'thead th': {
//    paddingInlineEnd: spacing(8),
//    paddingBottom: spacing(8),
//    paddingInlineStart: spacing(8),
//  },
//  'thead th:first-child': {
//    paddingInlineStart: '0',
//  },
//  'thead th:last-child': {
//    paddingInlineEnd: '0',
//  },
//  'tbody td, tfoot td': {
//    paddingTop: spacing(8),
//    paddingInlineEnd: spacing(8),
//    paddingBottom: spacing(8),
//    paddingInlineStart: spacing(8),
//  },
//  'tbody td:first-child, tfoot td:first-child': {
//    paddingInlineStart: '0',
//  },
//  'tbody td:last-child, tfoot td:last-child': {
//    paddingInlineEnd: '0',
//  },
//  figure: {
//    marginTop: spacing(32),
//    marginBottom: spacing(32),
//  },
//  'figure > *': {
//    marginTop: '0',
//    marginBottom: '0',
//  },
//  figcaption: {
//    //fontSize: spacing(14),
//    lineHeight: round(20 / 14),
//    marginTop: spacing(12),
//  },
//};

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
