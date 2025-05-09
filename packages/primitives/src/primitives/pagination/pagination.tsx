import { component$, Slot } from '@builder.io/qwik';
import { Button } from '../button';
import type { PaginationProps } from './types/pagination-api';
import { usePagination } from './use-pagination';

export const HPagination = component$<PaginationProps>((props) => {
  const {
    selectedPage,
    totalPages,
    onPageChange$,
    siblingCount,
    hidePrevButton = false,
    hideNextButton = false,
    disabled = false,
    customArrowTexts: {
      previous: previousButtonLabel = 'PREV',
      next: nextButtonLabel = 'NEXT',
    } = {},
    defaultClass = '',
    selectedClass = '',
    dividerClass = '',
    nextButtonClass = '',
    prevButtonClass = '',
    ...rest
  } = props;

  const isPrevButtonEnabled = () => !hidePrevButton && selectedPage > 1;
  const isNextButtonEnabled = () => !hideNextButton && selectedPage !== totalPages;

  const visibleItems = usePagination(totalPages, selectedPage, siblingCount || 1);

  return (
    <nav aria-label="pagination" data-testid="pagination" {...rest}>
      <button
        class={nextButtonClass}
        aria-label={'prevAriaLabel'}
        disabled={disabled || !isPrevButtonEnabled()}
        onClick$={() => {
          if (selectedPage > 1) {
            onPageChange$(selectedPage - 1);
          }
        }}
      >
        <Slot name="prefix" />
        <span>{previousButtonLabel}</span>
      </button>

      {/* Button List */}
      {visibleItems.map((item: string | number, index: number) => {
        const isSelected = selectedPage === item;
        return (
          <span key={index}>
            {typeof item === 'string' ? (
              <button class={dividerClass} disabled={true}>
                ...
              </button>
            ) : (
              <button
                class={[defaultClass, selectedPage === item && selectedClass]}
                aria-label={`Page ${item} of ${totalPages}`}
                aria-current={selectedPage === item}
                disabled={disabled || isSelected}
                onClick$={() => {
                  onPageChange$(item);
                }}
              >
                {item}
              </button>
            )}
          </span>
        );
      })}

      {/* Next Button */}
      <Button
        class={prevButtonClass}
        aria-label={'nextAriaLabel'}
        disabled={disabled || !isNextButtonEnabled()}
        onClick$={() => {
          if (selectedPage < totalPages) {
            onPageChange$(selectedPage + 1);
          }
        }}
      >
        <span>{nextButtonLabel}</span>
        <Slot name="suffix" />
      </Button>
    </nav>
  );
});
