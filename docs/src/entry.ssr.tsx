/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { renderToStream, type RenderToStreamOptions } from '@builder.io/qwik/server';
// eslint-disable-next-line import/no-unresolved
import { manifest } from '@qwik-client-manifest';
import Root from './root';

export default (options: RenderToStreamOptions) =>
  renderToStream(<Root />, {
    manifest,
    ...options,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      lang: 'en-us',
      ...options.containerAttributes,
    },
  });
