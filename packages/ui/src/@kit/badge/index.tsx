import type { PropsOf } from '@builder.io/qwik';

type BadgeProps = PropsOf<'div'> & {
  look?: 'primary' | 'secondary' | 'alert' | 'outline';
};

export const Badge = ({ look, class: className, children, ...props }: BadgeProps) => (
  <div
    class={[
      'inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold shadow-sm transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden',
      (look === 'primary' || !look) ? 'bg-primary text-primary-foreground hover:bg-primary/80' : '',
      look === 'secondary' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' : '',
      look === 'alert' ? 'bg-alert text-alert-foreground hover:bg-alert/80' : '',
      look === 'outline' ? 'border text-foreground' : '',
      className,
    ]}
    {...props}
  >
    {children}
  </div>
);
