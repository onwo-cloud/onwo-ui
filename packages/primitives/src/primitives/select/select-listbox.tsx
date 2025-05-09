import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

type SelectListboxProps = PropsOf<'ul'>;

/**
 * @deprecated This component is deprecated. It will be removed in a future release.
 */
export const HSelectListbox = component$<SelectListboxProps>((props: PropsOf<'ul'>) => {
  // props to prevent type errors in consumer apps
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  props;

  return (
    <>
      <Slot />
    </>
  );
});
