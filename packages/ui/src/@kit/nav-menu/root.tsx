import { Slot, component$ } from '@builder.io/qwik';

export type NavMenuProps = {
  label: string;
};

export const NavMenu = component$(({ label }: NavMenuProps) => {
  return (
    <nav
      aria-label={label}
      data-orientation="horizontal"
      dir="ltr"
      class="relative z-10 flex max-w-max flex-1 items-center justify-center"
    >
      <div style="position: relative;">
        <ul
          data-orientation="horizontal"
          class="group flex flex-1 list-none items-center justify-center space-x-1"
          dir="ltr"
        >
          <Slot />
        </ul>
      </div>
      <div class="absolute left-0 top-full flex justify-center"></div>
    </nav>
  );
});
