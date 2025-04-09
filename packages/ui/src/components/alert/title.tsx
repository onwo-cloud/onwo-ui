import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type TitleProps = {};

export const Title = withAs('h6')<TitleProps>(({ As, children, class: className, ...props }) => (
  <As class={cn('flex items-center font-medium gap-3', className)} {...props}>
    {children}
  </As>
));
