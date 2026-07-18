import {
  component$,
  useSignal,
  useVisibleTask$,
  Slot,
  Signal,
} from '@qwik.dev/core';
import {
  PageNavRoot as _PageNavRoot,
  PageNavLink as _PageNavLink,
  PageNavMenu as _PageNavMenu,
  PageNavMenuTrigger as _PageNavMenuTrigger,
  PageNavItem as _PageNavItem,
  type PageNavLinkProps as _PageNavLinkProps,
  type PageNavRootProps as _PageNavRootProps
} from '~primitives/@kit/page-nav';
import { PageNavContext } from '~primitives/@kit/page-nav/use-page-nav-context';
import { useIsPressed } from '~primitives/hooks/use-is-pressed';
import { initContext, OwPropsOf, composeProps } from '~primitives/index';
import { UiIcon } from '~ui/commons';

const NavInitContext = initContext<Signal<boolean>>('nav-init-context');

export type PageNavIndicatorProps = {
  class?: string | (string | undefined)[];
  style?: Record<string, string | number>;
};

/**
 * Shared Indicator component — Single point of update for bar height, color, and padding inset
 */
export const PageNavIndicator = component$<PageNavIndicatorProps>(({ class: className, style }) => {
  return (
    <div
      class={[
        'absolute bottom-0 px-3 h-[2px] pointer-events-none',
        className,
      ]}
      style={style}
    >
      <div class="w-full h-full bg-current-color/90" />
    </div>
  );
});

export const PageNavItem = component$((props: OwPropsOf<'div'>) => (
  <_PageNavItem class={["h-full", props.class]} {...props}>
    <Slot />
  </_PageNavItem>
));

export type PageNavRootProps = _PageNavRootProps;

export const PageNavRoot = component$<PageNavRootProps>(({ value: valueProp, class: className, ...props }) => {
  const indicatorStyle = useSignal({ width: '0px', left: '0px', opacity: 0 });
  const rootRef = useSignal<HTMLDivElement>();

  const fallbackValue = useSignal('');
  const value = valueProp ?? fallbackValue;

  // Track initialization status
  const isReady = useSignal(false);
  NavInitContext.useProvider(isReady);

  // Calculate and animate sliding indicator line
  useVisibleTask$(({ track }) => {
    const val = track(() => value.value);

    const updateIndicator = () => {
      if (!rootRef.value) return;
      const activeElement = rootRef.value.querySelector(`[data-tab-value="${val}"]`) as HTMLElement;
      if (activeElement) {
        const innerElement = activeElement.querySelector('.tab-inner') as HTMLElement;
        if (innerElement) {
          const rect = innerElement.getBoundingClientRect();
          const rootRect = rootRef.value.getBoundingClientRect();
          indicatorStyle.value = {
            width: `${rect.width}px`,
            left: `${rect.left - rootRect.left}px`,
            opacity: 1,
          };
        }
      } else {
        indicatorStyle.value = { ...indicatorStyle.value, opacity: 0 };
      }
    };

    updateIndicator();

    if (!isReady.value) {
      isReady.value = true;
    }

    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  });

  return (
    <_PageNavRoot
      value={value}
      class={["flex overflow-clip items-center -mx-3 relative", className]}
      {...props}
    >
      <div ref={rootRef} class="flex items-center h-full w-full relative">
        <Slot />

        {/* Dynamic client indicator sharing rootRef 39px height context */}
        {isReady.value && (
          <PageNavIndicator
            class="transition-all duration-150 ease-out"
            style={{
              width: indicatorStyle.value.width,
              transform: `translateX(${indicatorStyle.value.left})`,
              opacity: indicatorStyle.value.opacity,
            }}
          />
        )}
      </div>
    </_PageNavRoot>
  );
});

export type PageNavLinkProps = _PageNavLinkProps & {
  itemProps?: OwPropsOf<'div'>;
};

export const PageNavLink = component$<PageNavLinkProps>(({ value, itemProps, ...props }) => {
  const context = PageNavContext.use();
  const isReady = NavInitContext.use();
  const isActive = context.selected.value === value;

  const { isPressed, handles } = useIsPressed();

  return (
    <PageNavItem {...itemProps}>
      <_PageNavLink
        value={value}
        {...composeProps<OwPropsOf<'div'>>({
    class: "select-none flex items-start h-full min-w-0 relative cursor-pointer group focus:outline-none text-[14px] leading-[100%] text-ink-secondary hover:text-ink focus:text-ink data-[active]:text-ink",
    'data-tab-value': value,
    'data-is-pressed': isPressed.value ? true : undefined,
    'data-active': isActive ? true : undefined,
  }, handles, props)}
      >
        {/* SSR fallback line positioned at bottom-0 of PageNavLink (39px nav height) */}
        {isActive && !isReady.value && (
          <PageNavIndicator class="inset-x-0" />
        )}

        {/* Button target element (30px height) centered inside PageNavLink */}
        <div class="tab-inner relative flex items-center px-3 py-2 rounded-lg">
          <div class="absolute inset-0 rounded-lg bg-transparent transition-transform duration-100 ease-out group-hover:bg-shade-100 group-focus:bg-canvas-hover scale-100 group-data-[is-pressed]:scale-[0.94] group-active:scale-[0.94]" />

          <div class="relative spring-fast z-10 flex gap-1 items-center pointer-events-none line-clamp-1 overflow-visible">
            <Slot />
          </div>
        </div>
      </_PageNavLink>
    </PageNavItem>
  );
});

export const PageNavMenu = ({ children, ...props }: Omit<OwPropsOf<typeof _PageNavMenu>, 'as'>) => (
  <_PageNavMenu as={PageNavItem as unknown as 'div'} {...props}>
    {children}
  </_PageNavMenu>
)

export const PageNavMenuTrigger = ({
  children,
  class: className,
  ...props
}: OwPropsOf<typeof _PageNavMenuTrigger> & { itemProps?: OwPropsOf<'div'> }) => (
  <_PageNavMenuTrigger
    class={[
      "select-none flex items-start h-full min-w-0 relative cursor-pointer group focus:outline-none text-[14px] leading-[100%] text-ink-secondary hover:text-ink focus:text-ink",
      className,
    ]}
    {...props}
  >
    <div class="tab-inner relative flex items-center px-3 py-2 rounded-lg">
      <div class="absolute inset-0 rounded-lg bg-transparent transition-transform duration-100 ease-out group-hover:bg-shade-100 group-focus:bg-canvas-hover scale-100 group-data-[is-pressed]:scale-[0.94] group-active:scale-[0.94]" />

      <div class="relative spring-fast z-10 flex gap-1 items-center pointer-events-none line-clamp-1 overflow-visible">
        {children}
        <UiIcon size="13px" i="chevron-down" />
      </div>
    </div>
  </_PageNavMenuTrigger>
);
