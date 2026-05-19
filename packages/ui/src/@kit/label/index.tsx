import type { LabelProps } from '@onwo/primitives/label';
import { Label as PLabel } from '@onwo/primitives/label';

export const Label = ({ class: className, ...props }: LabelProps) => (
  <PLabel
    data-slot="label"
    class={[
      'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      className,
    ]}
    {...props}
  />
);
