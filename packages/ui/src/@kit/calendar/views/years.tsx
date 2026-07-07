import type { QRL, Signal } from '@qwik.dev/core';
import { $, component$ } from '@qwik.dev/core';

import { isSameYear } from '~ui/utils/date';
import { CalendarGrid } from '../commons/calendar-grid';
import { CalendarGridButton } from '../commons/calendar-grid-button';
import type { WeekStart } from '../date-picker-helpers';
import { isDateInRange, startOfYearPeriod, Views } from '../date-picker-helpers';

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

export const CalendarViewYear = component$(
  ({ selectedDate, minDate, maxDate, viewDate, view }: Props) => {
    const first = startOfYearPeriod(viewDate.value, 10);
    const currentYear = new Date().getFullYear();

    return (
      <CalendarGrid>
        {Array.from({ length: 3 }, (_, row) => (
          <tr key={row} class="flex select-none font-normal-light w-full">
            {Array.from({ length: 4 }, (_, col) => {
              const year = first - 1 + row * 4 + col;
              const newDate = new Date(viewDate.value);
              newDate.setFullYear(year);

              const isSelected = selectedDate.value
                ? isSameYear(selectedDate.value, newDate)
                : false;
              const isDisabled = !isDateInRange(newDate, minDate, maxDate);

              return (
                <CalendarGridButton
                  key={`${row}-${col}`}
                  name="year"
                  highlight={currentYear === year}
                  isSelected={isSelected}
                  isDisabled={isDisabled}
                  onSelected$={$(() => {
                    viewDate.value = newDate;
                    view.value = Views.Months;
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
