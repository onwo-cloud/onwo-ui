import { component$, useSignal } from '@builder.io/qwik';
import { Calendar } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultCalendar: BoxedComp = {
  title: 'Default',
  display: component$(() => {
    const vdefault = useSignal<Date | undefined>();
    return (
      <div class="w-full flex justify-center">
        <Calendar bind:value={vdefault} />
      </div>
    );
  }),
  code: `<Calendar bind:value={calValue} />`,
};

const withTimeModuleCalendar: BoxedComp = {
  title: 'With time module',
  display: component$(() => {
    const vtimemodule = useSignal<Date | undefined>();
    return (
      <div class="w-full flex justify-center">
        <Calendar mode="date-and-time" bind:value={vtimemodule} />
      </div>
    );
  }),
  code: `<Calendar mode="date-and-time" bind:value={calValue} />`,
};

export const section: Section = {
  title: 'Calendar',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/calendar',
  description: 'Display a Calendar component',
  components: [defaultCalendar, withTimeModuleCalendar],
};
