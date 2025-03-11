import { DocumentHead } from "@builder.io/qwik-city";
import { buildHead } from "../../utils/build-head";
import { GettingStartedPage } from "../../pages/getting-started";

export default () => <GettingStartedPage />

export const head: DocumentHead = buildHead({
  title: 'onwo design system',
  description:
    'My personal blog, where I talk about the technology I love, explore new areas and share my programming knowledge.',
  shareImage: '/share.png',
});
