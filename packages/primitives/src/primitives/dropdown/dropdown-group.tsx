import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useContext, useContextProvider } from '@builder.io/qwik';
import type { DropdownGroupContext } from './dropdown-context';
import { dropdownContextId, dropdownGroupContextId } from './dropdown-context';

type DropdownGroupProps = PropsOf<'div'>;

export const HDropdownGroup = component$((props: DropdownGroupProps) => {
  const context = useContext(dropdownContextId);
  const groupLabelId = `${context.localId}-group-label`;

  const dropdownGroupContext: DropdownGroupContext = {
    groupLabelId,
  };

  useContextProvider(dropdownGroupContextId, dropdownGroupContext);

  return (
    <div aria-labelledby={groupLabelId} role="group" {...props}>
      <Slot />
    </div>
  );
});
