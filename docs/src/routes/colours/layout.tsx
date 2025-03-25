import { Slot, component$ } from '@builder.io/qwik';
import { BaseLayout } from '~/commons/base-layout';

export default component$(() => (
  <BaseLayout>
    <Slot />
  </BaseLayout>
));
