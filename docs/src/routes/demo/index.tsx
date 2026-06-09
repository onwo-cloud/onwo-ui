import type { ClassList } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { buildHead } from '~/utils/build-head';

const cx = (c: ClassList) => c ?? '';

export default () => (
  <div class="flex h-screen lg:gap-8">
    <p class={["text-red-500", "font-bold", cx('123')]}>Hello</p>
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - theme builder',
  description: '',
  shareImage: '/share.png',
});
