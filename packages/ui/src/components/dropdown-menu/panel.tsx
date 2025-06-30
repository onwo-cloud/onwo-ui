import type { JSXChildren } from '@builder.io/qwik';
import { Panel } from '@onwo/primitives/popover';

export type DropdownMenuPanelProps = {
  children: JSXChildren;
};

export const DropdownMenuPanel = (props: DropdownMenuPanelProps) => {
  return (
    <Panel>
      <div class="border w-[400px] border-[blue] px-3 py-2 bg-[white]">{props.children}</div>
    </Panel>
  );
};
