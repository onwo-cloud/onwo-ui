import type { ButtonHTMLAttributes, JSX } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  variant?: 'fill' | 'outline' | 'ghost'; // default: fill
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // default: md
  type?: 'button' | 'submit'; // default: button
};

export const Button = ({
  variant = 'fill',
  size = 'md',
  type = 'button',
  disabled = false,
  class: className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      disabled={disabled}
      class={cn(
        'relative flex select-none items-center justify-center overflow-hidden whitespace-nowrap font-semibold transition-all duration-200',
        {
          'bg-piccolo text-goten': variant === 'fill',
          'border border-piccolo text-piccolo': variant === 'outline',
          'text-piccolo': variant === 'ghost',
          'h-6 px-1 text-moon-12 rounded-moon-s-xs': size === 'xs',
          'h-8 px-1 text-moon-14 rounded-moon-s-sm': size === 'sm',
          'h-10 px-2 text-moon-14 rounded-moon-s-sm': size === 'md',
          'h-12 px-3 text-moon-16 rounded-moon-s-sm': size === 'lg',
          'h-14 px-4 text-moon-16 rounded-moon-s-md': size === 'xl',
          'active:scale-90': !disabled,
          'opacity-50 cursor-not-allowed': disabled,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
  /*
  return (
    <button
      class={cn(className)}
      disabled={disabled}
      {...rest}
    >
      <Slot />
    </button>
  <button type="button" data-size="xs" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-xs gap-1 z-0 text-moon-12 h-6 active:scale-90 group pe-2 ps-1 row">
XS Button
</button>
  <button type="button" data-size="sm" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-sm gap-1 z-0 text-moon-14 h-8 active:scale-90 group pe-3 ps-1 row">
SM Button
</button>
  <button type="button" data-size="md" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-sm gap-2 z-0 text-moon-14 h-10 active:scale-90 group pe-4 ps-2 row">
MD Button is default
</button>
  <button type="button" data-size="lg" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-sm gap-2 z-0 text-moon-16 h-12 active:scale-90 group pe-4 ps-3 row">
LG Button
</button>
  <button type="button" data-size="xl" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-md gap-2 z-0 text-moon-16 h-14 active:scale-90 group pe-6 ps-4 row">
XL Button
</button>
  );
  */
};
import { component$, useSignal, Slot, type QwikIntrinsicElements } from '@builder.io/qwik';

export interface TabsProps extends QwikIntrinsicElements['div'] {
  id: string;
  testid?: string;
  class?: string;
  selected?: number;
  onChange$?: (index: number) => void;
}

export const Tabs = component$<TabsProps>(({ id, testid, class: className, selected = 0, onChange$, ...props }) => {
  const selectedIndex = useSignal(selected);

  return (
    <div id={id} data-testid={testid} class={className} {...props}>
      <Slot />
    </div>
  );
});

export interface TabProps extends QwikIntrinsicElements['button'] {
  id?: string;
  disabled?: boolean;
  class?: string;
  testid?: string;
  unselectedClass?: string;
  selectedClass?: string;
  tabindex?: number;
  isSelected?: boolean;
  size?: 'sm' | 'md';
  onChange$?: (index: number) => void;
}

export const Tab = component$<TabProps>(({ 
  id, 
  disabled = false, 
  class: className, 
  testid, 
  unselectedClass = 'after:scale-x-0 text-bulma', 
  selectedClass = 'after:scale-x-100 text-piccolo', 
  tabindex, 
  isSelected = false, 
  size, 
  onChange$, 
  ...props 
}) => {
  return (
    <button
      id={id}
      data-testid={testid}
      class={cn(
        'relative px-2 py-1 text-sm font-medium transition-colors duration-200',
        isSelected ? selectedClass : unselectedClass,
        className
      )}
      disabled={disabled}
      tabIndex={tabindex}
      onClick$={() => onChange$?.(tabindex ?? 0)}
      {...props}
    >
      <Slot />
    </button>
  );
});

export interface ListProps extends QwikIntrinsicElements['div'] {
  id?: string;
  testid?: string;
  class?: string;
  size?: 'sm' | 'md';
  selected?: number;
  value?: number;
  tabTitles?: string[];
  tabModule?: any;
  onChange$?: (index: number) => void;
}

export const List = component$<ListProps>(({ 
  id, 
  testid, 
  class: className, 
  size = 'md', 
  selected, 
  value, 
  tabTitles = [], 
  tabModule, 
  onChange$, 
  ...props 
}) => {
  return (
    <div 
      id={id} 
      data-testid={testid} 
      class={cn('flex justify-around gap-2', className)} 
      role="tablist"
      {...props}
    >
      <Slot />
    </div>
  );
});

export interface PillProps extends TabProps {
  unselectedClass?: string;
  selectedClass?: string;
}

export const Pill = component$<PillProps>(({ 
  id, 
  disabled = false, 
  class: className, 
  testid, 
  unselectedClass = '', 
  selectedClass = 'bg-goku', 
  tabindex, 
  isSelected = false, 
  size, 
  onChange$, 
  ...props 
}) => {
  return (
    <button
      id={id}
      data-testid={testid}
      class={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
        isSelected ? selectedClass : unselectedClass,
        className
      )}
      disabled={disabled}
      tabIndex={tabindex}
      onClick$={() => onChange$?.(tabindex ?? 0)}
      {...props}
    >
      <Slot />
    </button>
  );
});

export interface PanelsProps extends QwikIntrinsicElements['div'] {
  id?: string;
  testid?: string;
  class?: string;
  selected?: number;
}

export const Panels = component$<PanelsProps>(({ id, testid, class: className, selected, ...props }) => {
  return (
    <div id={id} data-testid={testid} class={className} {...props}>
      <Slot />
    </div>
  );
});

export interface PanelProps extends QwikIntrinsicElements['div'] {
  id?: string;
  testid?: string;
  class?: string;
  selected?: boolean;
}

export const Panel = component$<PanelProps>(({ id, testid, class: className, selected = false, ...props }) => {
  return (
    <div 
      id={id} 
      data-testid={testid} 
      class={cn(selected ? 'block' : 'hidden', className)} 
      role="tabpanel"
      {...props}
    >
      <Slot />
    </div>
  );
});
