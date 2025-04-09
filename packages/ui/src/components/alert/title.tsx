import { withAs } from '~/utils/as';
import { cn } from '~/utils/cn';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type TitleProps = {};

export const Title = withAs('h6')<TitleProps>(({ As, children, class: className, ...props }) => (
  <As class={cn('flex items-center font-medium gap-3', className)} {...props}>
    {children}
  </As>
));
