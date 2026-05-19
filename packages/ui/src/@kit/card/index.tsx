import { type PropsOf } from '@builder.io/qwik';

export const CardRoot = ({ class: className, children, ...props }: PropsOf<'div'>) => (
  <div
    {...props}
    class={['rounded-base border bg-card text-card-foreground shadow-sm', className]}
  >
    {children}
  </div>
);

export const CardHeader = ({ class: className, children, ...props }: PropsOf<'div'>) => (
  <div {...props} class={['flex flex-col space-y-1.5 p-6', className]}>
    {children}
  </div>
);

export const CardTitle = ({ class: className, children, ...props }: PropsOf<'h3'>) => (
  <h3 {...props} class={['leading-none font-medium tracking-tight', className]}>
    {children}
  </h3>
);

export const CardDescription = ({ class: className, children, ...props }: PropsOf<'p'>) => (
  <p {...props} class={['text-sm text-muted-foreground', className]}>
    {children}
  </p>
);

export const CardContent = ({ class: className, children, ...props }: PropsOf<'div'>) => (
  <div {...props} class={['p-6 pt-0', className]}>
    {children}
  </div>
);

export const CardFooter = ({ class: className, children, ...props }: PropsOf<'div'>) => (
  <div {...props} class={['flex items-center p-6 pt-0', className]}>
    {children}
  </div>
);

// Experimental API
export const CardImage = ({ class: className, ...props }: PropsOf<'img'>) => (
  <img {...props} class={['w-full object-cover', className]} />
);
