import type { DocumentMeta } from '@qwik.dev/router';

type BuildHead = {
  title: string;
  description: string;
  shareImage?: string;
};

export const buildHead = (data: BuildHead) => ({
  title: data.title,
  meta: [
    {
      name: 'description',
      content: data.description,
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'https://ui.onwo.cloud/' },
    { name: 'og:title', content: `${data.title} - onwo-ui` },
    {
      name: 'og:description',
      content: data.description,
    },
    data.shareImage !== undefined && { name: 'og:image', content: data.shareImage },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: 'https://ui.onwo.cloud/' },
    { name: 'twitter:title', content: `${data.title} - onwo-ui` },
    {
      name: 'twitter:description',
      content: data.description,
    },
    { name: 'twitter:image', content: data.shareImage },
  ].filter((x?: DocumentMeta | false): x is DocumentMeta => !!x) as DocumentMeta[],
});
