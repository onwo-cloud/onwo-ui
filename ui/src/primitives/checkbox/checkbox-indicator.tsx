import type { PropsOf } from '@builder.io/qwik';
import { component$, useContext, Slot, useTask$, useStyles$ } from '@builder.io/qwik';
import { CheckboxContext } from './checkbox-context';

export type CheckboxIndicatorProps = PropsOf<'div'>;

export const CheckboxIndicator = component$<CheckboxIndicatorProps>((props) => {
  useStyles$(`
[data-qds-indicator][data-hidden] {
  display: none;
}
  `);

  const checkSig = useContext(CheckboxContext);

  useTask$(({ track }) => {
    track(() => checkSig.value);
  });

  return (
    <div {...props} data-hidden={!checkSig.value} data-qds-indicator aria-hidden="true">
      <Slot />
    </div>
  );
});
