import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { cn } from '@onwo/ui';
import { animate, scroll } from 'motion';
import { useWindowWidth } from '~/hooks/use-window-width';

const SearchBar = () => <></>;

export const TOPBAR_HEIGHT = '78px';

const GithubButton = (props: { class?: string }) => (
  <Link target="_blank" class={props.class} href="https://github.com/onwo-cloud/onwo-ui">
    <GithubIcon />
  </Link>
);

export const StickyTopBar = component$(() => {
  const scrollBreakpoint = useSignal(false);
  const windowWidth = useWindowWidth();
  const stickyBarRef = useSignal<HTMLDivElement>();
  const linkRef = useSignal<HTMLDivElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track, cleanup }) => {
    track(() => stickyBarRef.value);
    track(() => linkRef.value);
    track(() => windowWidth.value);

    if (!stickyBarRef.value || !linkRef.value || windowWidth.value === 0) return;

    const isMobile = windowWidth.value > 0 && windowWidth.value < 768;
    const linkWidth = linkRef.value.offsetWidth;

    if (isMobile) {
      stickyBarRef.value.style.width = `${linkWidth + 48 + 16}px`;
      linkRef.value.style.transform = `translateX(16px)`;
    } else {
      // Set up scroll animations for desktop
      const u1 = scroll(
        (animate as any)(
          stickyBarRef.value,
          {
            width: [`${linkWidth + 48}px`, `${linkWidth + 48 + 16}px`],
          },
          { duration: 0.3, easing: 'ease-out' },
        ),
        { target: document.documentElement, offset: ['40px', '100px'] },
      );

      const u2 = scroll(
        (animate as any)(
          linkRef.value,
          {
            x: [0, 16],
          },
          { duration: 0.3, easing: 'ease-out' },
        ),
        { target: document.documentElement, offset: ['40px', '100px'] },
      );

      // Control logo visibility based on scroll
      const u3 = scroll(
        (progress: number) => {
          scrollBreakpoint.value = progress > 0.6;
        },
        { target: document.documentElement, offset: ['40px', '100px'] },
      );

      cleanup(() => {
        u1();
        u2();
        u3();
      });
    }
  });

  return (
    <div
      ref={stickyBarRef}
      class={cn(
        'fixed left-1/2 -translate-x-1/2 flex px-6 py-2 bg-black text-contrast md:bg-papyrus md:text-lead justify-center rounded-full items-center gap-4 transition-all duration-200',
        scrollBreakpoint.value && 'md:bg-black md:text-contrast',
      )}
    >
      {/* Logo that appears on scroll or always on mobile */}
      <div
        class={cn(
          'absolute left-4 transition-all duration-300 opacity-100',
          scrollBreakpoint.value ? 'md:opacity-100' : 'md:opacity-0',
        )}
      >
        <Logo size={20} />
      </div>
      <nav aria-label="Main" ref={linkRef}>
        <ul class="flex gap-4 text-sm items-center font-semibold">
          <li class="hover:underline">
            <Link class="px-2 py-2" href="/docs/getting-started">
              Documentation
            </Link>
          </li>
          <li class="hover:underline">
            <Link class="px-2 py-2" href="/components/button">
              Components
            </Link>
          </li>
          <GithubButton class="md:hidden" />
        </ul>
      </nav>
    </div>
  );
});

export const TopBarV2 = component$(() => {
  const titleRef = useSignal<HTMLSpanElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    if (titleRef.value) {
      // Blur animation for the title on scroll
      scroll(
        (animate as any)(
          titleRef.value,
          {
            filter: ['blur(0px)', 'blur(4px)'],
            opacity: [1, 0.3],
          },
          { duration: 0.4, easing: 'ease-out' },
        ),
        { target: document.documentElement, offset: ['0px', '150px'] },
      );
    }
  });

  return (
    <div
      style={{ height: TOPBAR_HEIGHT }}
      class="border-b border-transparent flex justify-between w-full items-center py-4 px-10"
    >
      <div
        class="hidden md:flex text-3xl tracking-tight flex gap-2 items-center"
        style={{ 'font-family': 'League Spartan' }}
      >
        <Link href="/" class="flex gap-2 items-center">
          <svg
            preserveAspectRatio="none"
            id="Subtract"
            class="pointer-events-none"
            width={24}
            height={24}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0C15.5228 2.66808e-05 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10V1.74659C1.83175e-05 0.781992 0.781987 0 1.74659 0H10ZM6.68447 2.61766C6.62146 2.33818 6.22317 2.33818 6.16017 2.61766L5.50035 5.54706C5.47754 5.64829 5.39847 5.72736 5.29724 5.75016L2.36784 6.40999C2.08834 6.47297 2.08835 6.87128 2.36784 6.93428L5.29724 7.59424C5.39845 7.61704 5.47753 7.69601 5.50035 7.79721L6.16017 10.7266C6.22314 11.0062 6.6215 11.0062 6.68447 10.7266L7.34429 7.79721C7.36711 7.69602 7.4462 7.61705 7.5474 7.59424L10.4768 6.93428C10.7563 6.8713 10.7563 6.47296 10.4768 6.40999L7.5474 5.75016C7.44618 5.72735 7.36709 5.64828 7.34429 5.54706L6.68447 2.61766Z"
              fill="#020218"
            />
          </svg>
          <span ref={titleRef}>ui.onwo</span>
        </Link>
      </div>

      <StickyTopBar />

      <div class="hidden md:flex flex items-center gap-2">
        <SearchBar />
        <div class="flex gap-4">
          <GithubButton />
        </div>
      </div>
    </div>
  );
});

const GithubIcon = () => (
  <svg
    preserveAspectRatio="none"
    id="Vector_0"
    class="pointer-events-none"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.9268 4.18014C14.2114 2.95443 13.241 1.98403 12.0154 1.26872C10.7896 0.55338 9.45142 0.195801 7.99987 0.195801C6.5485 0.195801 5.20987 0.553489 3.98434 1.26872C2.75862 1.98399 1.7883 2.95443 1.07292 4.18014C0.357652 5.40582 0 6.74427 0 8.19545C0 9.93866 0.508586 11.5062 1.52601 12.8985C2.54333 14.2908 3.85756 15.2543 5.46858 15.789C5.65611 15.8238 5.79493 15.7993 5.88519 15.7161C5.97549 15.6329 6.02058 15.5286 6.02058 15.4038C6.02058 15.3829 6.01879 15.1955 6.01533 14.8413C6.01204 14.5323 6.01029 14.2234 6.01007 13.9144L5.77048 13.9558C5.61773 13.9838 5.42502 13.9957 5.19236 13.9923C4.95981 13.9891 4.7184 13.9647 4.46844 13.9194C4.21838 13.8745 3.9858 13.7703 3.77051 13.6071C3.55532 13.4439 3.40257 13.2303 3.31227 12.9666L3.20811 12.7269C3.13868 12.5673 3.02937 12.3901 2.88004 12.1957C2.73071 12.0012 2.57971 11.8694 2.42695 11.8L2.35402 11.7478C2.30542 11.7131 2.26033 11.6712 2.21863 11.6226C2.17696 11.5741 2.14577 11.5255 2.12493 11.4768C2.10407 11.4281 2.12136 11.3882 2.177 11.3568C2.23264 11.3255 2.33319 11.3103 2.47908 11.3103L2.68733 11.3414C2.82623 11.3692 2.99803 11.4524 3.20296 11.5913C3.40778 11.7302 3.57616 11.9107 3.70812 12.1328C3.86792 12.4176 4.06044 12.6346 4.28624 12.784C4.51186 12.9333 4.73934 13.0078 4.96846 13.0078C5.19758 13.0078 5.39547 12.9905 5.5622 12.9559C5.72875 12.9212 5.88501 12.869 6.03091 12.7996C6.0934 12.3341 6.26356 11.9765 6.54124 11.7266C6.14547 11.685 5.78964 11.6224 5.47358 11.5391C5.1577 11.4557 4.83128 11.3203 4.49453 11.1326C4.1576 10.9452 3.8781 10.7125 3.65595 10.4348C3.43376 10.1571 3.25141 9.79236 3.10916 9.34109C2.96684 8.88963 2.89566 8.36886 2.89566 7.77863C2.89566 6.93822 3.17002 6.22306 3.71863 5.63275C3.46163 5.00092 3.4859 4.29262 3.79149 3.50792C3.99288 3.44535 4.29153 3.49231 4.68731 3.6485C5.08316 3.80476 5.37299 3.93862 5.55709 4.0496C5.74119 4.16055 5.88869 4.25457 5.99982 4.33082C6.64577 4.15033 7.31237 4.06007 7.9998 4.06007C8.68723 4.06007 9.35397 4.15033 9.99996 4.33082L10.3958 4.08094C10.6664 3.91421 10.9861 3.76141 11.3539 3.62252C11.722 3.4837 12.0034 3.44546 12.1979 3.50803C12.5103 4.29277 12.5381 5.00103 12.2811 5.63286C12.8297 6.22317 13.1041 6.93851 13.1041 7.77873C13.1041 8.36897 13.0327 8.89139 12.8906 9.3463C12.7483 9.8013 12.5644 10.1656 12.3388 10.4401C12.1129 10.7145 11.8316 10.9454 11.4949 11.1327C11.158 11.3203 10.8315 11.4556 10.5156 11.539C10.1996 11.6224 9.84377 11.6851 9.44799 11.7268C9.80897 12.0391 9.98949 12.5322 9.98949 13.2058V15.4035C9.98949 15.5283 10.0329 15.6326 10.1198 15.7159C10.2066 15.799 10.3437 15.8235 10.5312 15.7886C12.1424 15.254 13.4567 14.2905 14.4739 12.8982C15.4911 11.5059 15.9999 9.93837 15.9999 8.19516C15.9995 6.74416 15.6417 5.40582 14.9268 4.18014Z"
      fill="currentColor"
    ></path>
  </svg>
);

type LogoProps = {
  withTitle?: boolean;
  size?: number;
};

const Logo = ({ withTitle = false, size = 24 }: LogoProps) => (
  <Link
    href="/"
    class="text-3xl tracking-tight flex gap-2 items-center"
    style={{
      'font-family': 'League Spartan',
    }}
  >
    <svg
      preserveAspectRatio="none"
      id="Subtract"
      class="pointer-events-none"
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 0C15.5228 2.66808e-05 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10V1.74659C1.83175e-05 0.781992 0.781987 0 1.74659 0H10ZM6.68447 2.61766C6.62146 2.33818 6.22317 2.33818 6.16017 2.61766L5.50035 5.54706C5.47754 5.64829 5.39847 5.72736 5.29724 5.75016L2.36784 6.40999C2.08834 6.47297 2.08835 6.87128 2.36784 6.93428L5.29724 7.59424C5.39845 7.61704 5.47753 7.69601 5.50035 7.79721L6.16017 10.7266C6.22314 11.0062 6.6215 11.0062 6.68447 10.7266L7.34429 7.79721C7.36711 7.69602 7.4462 7.61705 7.5474 7.59424L10.4768 6.93428C10.7563 6.8713 10.7563 6.47296 10.4768 6.40999L7.5474 5.75016C7.44618 5.72735 7.36709 5.64828 7.34429 5.54706L6.68447 2.61766Z"
        fill="currentColor"
      />
    </svg>
    {withTitle && <span>ui.onwo</span>}
  </Link>
);
