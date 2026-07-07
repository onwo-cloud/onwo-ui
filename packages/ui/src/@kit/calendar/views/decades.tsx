import type { QRL, Signal } from '@qwik.dev/core';
import { $, component$ } from '@qwik.dev/core';

import { CalendarGrid } from '../commons/calendar-grid';
import { CalendarGridButton } from '../commons/calendar-grid-button';
import type { WeekStart } from '../date-picker-helpers';
import { addYears, startOfYearPeriod, Views } from '../date-picker-helpers';

type Props = {
  language: string;
  weekStart: WeekStart;
  minDate?: Date;
  maxDate?: Date;
  view: Signal<Views>;
  selectedDate: Signal<Date | undefined>;
  viewDate: Signal<Date>;
  changeSelectedDate$: QRL<(date: Date) => void>;
};

export const CalendarViewDecade = component$(
  ({ minDate, maxDate, view, viewDate, selectedDate }: Props) => {
    const today = new Date();

    return (
      <CalendarGrid>
        {Array.from({ length: 3 }, (_, row) => (
          <tr key={row} class="flex select-none font-normal-light w-full">
            {Array.from({ length: 4 }, (_, col) => {
              const first = startOfYearPeriod(viewDate.value, 100);
              const year = first - 10 + (row * 4 + col) * 10;
              const firstDate = new Date(year, 0, 1);
              const lastDate = addYears(firstDate, 9);

              const isSelected =
                !!selectedDate.value &&
                firstDate < selectedDate.value &&
                lastDate > selectedDate.value;

              const isEnabled =
                (minDate ? minDate > firstDate : true) && (maxDate ? maxDate < lastDate : true);

              return (
                <CalendarGridButton
                  key={`${row}-${col}`}
                  name="decade"
                  highlight={firstDate < today && lastDate > today}
                  isSelected={isSelected}
                  isDisabled={!isEnabled}
                  onSelected$={$(() => {
                    const d = new Date(firstDate);
                    d.setFullYear(d.getFullYear() + 1);
                    viewDate.value = d;
                    view.value = Views.Years;
                  })}
                  label={String(year)}
                />
              );
            })}
          </tr>
        ))}
      </CalendarGrid>
    );
  },
);
