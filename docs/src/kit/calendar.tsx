import { component$, useSignal } from '@qwik.dev/core';
import { Calendar } from '@onwo/ui/calendar';

import type { BoxedComp, Section } from '.';

const defaultCalendar: BoxedComp = {
  title: 'Default',
  colSpan: 2,
  rowSpan: 2,
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

export const section: Section = {
  title: 'Calendar',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/calendar',
  description: 'Display a Calendar component',
  default: defaultCalendar,
  others: [],
};
