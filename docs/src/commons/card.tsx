import type { PropsOf } from '@builder.io/qwik';

export function Card({ class: className, ...props }: PropsOf<'div'>) {
  return (
    <div
      data-slot="card"
      class={[
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      ]}
      {...props}
    />
  );
}

export function CardHeader({ class: className, ...props }: PropsOf<'div'>) {
  return (
    <div
      data-slot="card-header"
      class={[
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      ]}
      {...props}
    />
  );
}

export function CardTitle({ class: className, ...props }: PropsOf<'div'>) {
  return (
    <div data-slot="card-title" class={['leading-none font-semibold', className]} {...props} />
  );
}

export function CardDescription({ class: className, ...props }: PropsOf<'div'>) {
  return (
    <div
      data-slot="card-description"
      class={['text-muted-foreground text-sm', className]}
      {...props}
    />
  );
}

export function CardAction({ class: className, ...props }: PropsOf<'div'>) {
  return (
    <div
      data-slot="card-action"
      class={['col-start-2 row-span-2 row-start-1 self-start justify-self-end', className]}
      {...props}
    />
  );
}

export function CardContent({ class: className, ...props }: PropsOf<'div'>) {
  return <div data-slot="card-content" class={['px-6', className]} {...props} />;
}

export function CardFooter({ class: className, ...props }: PropsOf<'div'>) {
  return (
    <div
      data-slot="card-footer"
      class={['flex items-center px-6 [.border-t]:pt-6', className]}
      {...props}
    />
  );
}
