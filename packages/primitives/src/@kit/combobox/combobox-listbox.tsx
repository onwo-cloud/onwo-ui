import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';

type ComboboxListboxProps = PropsOf<'ul'>;

/**
 * @deprecated This component is deprecated. It will be removed in a future release.
 */
export const HComboboxListbox = component$<ComboboxListboxProps>((props: PropsOf<'ul'>) => {
  // props to prevent type errors in consumer apps
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  props;

  return (
    <>
      <Slot />
    </>
  );
});
