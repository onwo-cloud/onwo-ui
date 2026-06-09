import { $, component$, useSignal, useTask$ } from '@builder.io/qwik';
import type { CSSProperties, JSXChildren, PropFunction, QRL, Signal } from '@builder.io/qwik';
import { UiIcon } from '~ui/icon-provider';

import {
  addMonths,
  addYears,
  getFirstDateInRange,
  getFormattedDate,
  startOfYearPeriod,
  Views,
  WeekStart,
} from './date-picker-helpers';
import { CalendarViewDays } from './views/days';
import { CalendarViewDecade } from './views/decades';
import { CalendarViewMonth } from './views/months';
import { CalendarViewYear } from './views/years';
import { InfiniteCarousel } from './infinite-carousel';

export type CalendarProps = {
  ref?: Signal<HTMLDivElement | undefined>;
  class?: string;
} & GenericRootProps;

type GenericRootProps = {
  language?: string;
  ['bind:value']: Signal<Date | undefined>;
  onSelected$?: QRL<(date: Date | undefined) => void>;
  minDate?: Date;
  maxDate?: Date;
  weekStart?: WeekStart;
};

export const getViewDatePage = (view: Views, date: Date, value: number): Date => {
  switch (view) {
    case Views.Days:
      return new Date(addMonths(date, value));
    case Views.Months:
      return new Date(addYears(date, value));
    case Views.Years:
      return new Date(addYears(date, value * 10));
    case Views.Decades:
      return new Date(addYears(date, value * 100));
    default:
      return new Date(addYears(date, value * 10));
  }
};

export const Calendar = component$(
  ({
    ref,
    minDate,
    maxDate,
    language = 'en',
    weekStart = WeekStart.Sunday,
    onSelected$,
    ...props
  }: CalendarProps) => {
    const value = props['bind:value'];
    const viewDefaultDate = getFirstDateInRange(
      props['bind:value'].value ?? new Date(),
      minDate,
      maxDate,
    );
    const view = useSignal(Views.Days);
    const viewDate = useSignal(viewDefaultDate);

    // Instantiate a raw, serializable progress signal to share across boundaries
    const currentProgress = useSignal(0);

    // Carousel Trigger Controls
    const carouselAction = useSignal<{ direction: 1 | -1; id: number }>({ direction: 1, id: 0 });

    // Signals for adjacent overlapped views
    const prevViewDate = useSignal(getViewDatePage(view.value, viewDefaultDate, -1));
    const nextViewDate = useSignal(getViewDatePage(view.value, viewDefaultDate, 1));

    useTask$(({ track }) => {
      const cd = track(() => viewDate.value);
      const cv = track(() => view.value);
      prevViewDate.value = getViewDatePage(cv, cd, -1);
      nextViewDate.value = getViewDatePage(cv, cd, 1);
    });

    const changeSelectedDate$ = $(async (date?: Date | undefined) => {
      value.value = date;
      if (onSelected$) {
        await onSelected$(date);
      }
    });

    useTask$(({ track }) => {
      track(() => value.value);
      viewDate.value = value.value ?? viewDefaultDate;
    });

    const renderView = (type: Views, specificViewDate: Signal<Date>) => {
      const renderProps = {
        language,
        minDate,
        maxDate,
        weekStart,
        view,
        viewDate: specificViewDate,
        selectedDate: props['bind:value'],
        changeSelectedDate$: changeSelectedDate$,
      };
      switch (type) {
        case Views.Decades:
          return <CalendarViewDecade {...renderProps} />;
        case Views.Years:
          return <CalendarViewYear {...renderProps} />;
        case Views.Months:
          return <CalendarViewMonth {...renderProps} />;
        case Views.Days:
        default:
          return <CalendarViewDays {...renderProps} />;
      }
    };

    const getNextView$ = $(() => {
      switch (view.value) {
        case Views.Days:
          return Views.Months;
        case Views.Months:
          return Views.Years;
        case Views.Years:
          return Views.Decades;
      }
      return view.value;
    });

    const getHeaderTitleForDate = (date: Date) => {
      switch (view.value) {
        case Views.Decades:
          return `${startOfYearPeriod(date, 100)} - ${startOfYearPeriod(date, 100) + 90}`;
        case Views.Years:
          return `${startOfYearPeriod(date, 10)} - ${startOfYearPeriod(date, 10) + 9}`;
        case Views.Months:
          return getFormattedDate(language, date, { year: 'numeric' });
        case Views.Days:
        default:
          return getFormattedDate(language, date, { month: 'long', year: 'numeric' });
      }
    };

    const triggerAction$ = $((direction: 1 | -1) => {
      carouselAction.value = { direction, id: carouselAction.value.id + 1 };
    });

    const handleTransitionEnd$ = $((direction: 1 | -1) => {
      viewDate.value = getViewDatePage(view.value, viewDate.value, direction);
    });

    // Calculates real-time styles for the header segments matching the current progress
    const getHeaderStyles = (type: 'prev' | 'curr' | 'next'): CSSProperties => {
      const p = currentProgress.value;
      const slideDist = 20; // Slide offset in pixels
      const fadeSpeed = 1.5; // Multiplier to make it fade out/in quicker

      switch (type) {
        case 'curr': {
          const absP = Math.abs(p);
          return {
            opacity: Math.max(0, 1 - absP * fadeSpeed),
            transform: `translateY(${p * slideDist}px)`,
            pointerEvents: p === 0 ? 'auto' : 'none',
          };
        }
        case 'prev': {
          const isActive = p > 0;
          return {
            opacity: isActive ? Math.min(1, p * fadeSpeed) : 0,
            transform: `translateY(${isActive ? (-1 + p) * slideDist : -slideDist}px)`,
            pointerEvents: 'none',
            visibility: isActive ? 'visible' : 'hidden',
          };
        }
        case 'next': {
          const isActive = p < 0;
          const absP = Math.abs(p);
          return {
            opacity: isActive ? Math.min(1, absP * fadeSpeed) : 0,
            transform: `translateY(${isActive ? (1 + p) * slideDist : slideDist}px)`,
            pointerEvents: 'none',
            visibility: isActive ? 'visible' : 'hidden',
          };
        }
      }
    };

    return (
      <div
        ref={ref}
        class={[
          'relative rounded-xl px-2 sm:px-4 flex items-stretch w-fit ring ring-separator overflow-hidden',
          props.class,
        ]}
      >
        <div class="shrink-0 py-4 w-72 max-w-full">
          <div>
            <div
              tabIndex={1}
              onKeyDown$={$(async (event) => {
                if (event.key === 'ArrowLeft') {
                  triggerAction$(-1);
                } else if (event.key === 'ArrowRight') {
                  triggerAction$(1);
                }
              })}
              aria-label="month"
              class="mb-2 mx-1 flex items-center justify-between z-10 relative"
            >
              <HeadNavButton
                icon={<UiIcon name="chevron-left" />}
                onClick$={$(() => triggerAction$(-1))}
              />

              <button
                type="button"
                tabIndex={-1}
                class="rounded-full text-sm font-fvs hover:fvs-medium hover:text-ink hover:bg-canvas-hover relative z-20 pointer-events-auto overflow-hidden"
                onClick$={async () => (view.value = await getNextView$())}
              >
                {/* The mask is applied here on a separate text container to protect the button's background hover */}
                <div
                  class="grid px-8 py-2 w-full h-full"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 6px, #000 calc(100% - 3px), transparent)',
                    maskImage: 'linear-gradient(to bottom, transparent, #000 6px, #000 calc(100% - 3px), transparent)',
                  }}
                >
                  <span class="col-start-1 row-start-1 will-change-transform" style={getHeaderStyles('prev')}>
                    {getHeaderTitleForDate(prevViewDate.value)}
                  </span>
                  <span class="col-start-1 row-start-1 will-change-transform" style={getHeaderStyles('curr')}>
                    {getHeaderTitleForDate(viewDate.value)}
                  </span>
                  <span class="col-start-1 row-start-1 will-change-transform" style={getHeaderStyles('next')}>
                    {getHeaderTitleForDate(nextViewDate.value)}
                  </span>
                </div>
              </button>

              <HeadNavButton
                icon={<UiIcon name="chevron-right" />}
                onClick$={$(() => triggerAction$(1))}
              />
            </div>
          </div>

          <InfiniteCarousel
            key={view.value} // Forces a complete remount on view change (Days -> Months)
            currentProgress={currentProgress}
            actionSignal={carouselAction}
            onTransitionEnd$={handleTransitionEnd$}
            prevView={renderView(view.value, prevViewDate)}
            currView={renderView(view.value, viewDate)}
            nextView={renderView(view.value, nextViewDate)}
          />
        </div>
      </div>
    );
  },
);

type HeadNavButtonProps = {
  icon: JSXChildren;
  onClick$: PropFunction<() => void>;
};

export const HeadNavButton = (props: HeadNavButtonProps) => (
  <button
    type="button"
    tabIndex={-1}
    class="touch-manipulation rounded-full text-ink-tertiary flex items-center justify-center w-8 h-8 transition-colors hover:text-ink cursor-pointer hover:bg-canvas-hover relative z-20 pointer-events-auto"
    onClick$={props.onClick$}
  >
    {props.icon}
  </button>
);
