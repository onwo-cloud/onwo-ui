import { component$, PropsOf, useComputed$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { Icon } from '~/utils/icon';

import { SectionsContent } from './sections-content';

// 1. The custom hook
export const useFormattedDate = (timestamp: number) => {
  return useComputed$(() => {
    const d = new Date(timestamp);
    const yyyy = d.getFullYear();
    // getMonth() is 0-indexed, so we add 1. padStart ensures 2 digits (e.g., '05')
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
  });
};

export const PulsatingMarker = ({ class: className, ...props }: PropsOf<'span'>) => (
  <span
    class={['relative flex h-[6px] w-[6px] rounded-full items-center justify-center', className]}
    {...props}
  >
    <span
      class="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
      style={{ backgroundColor: 'var(--color-accent-red)', 'animation-duration': '2s' }}
    />

    <span
      class="relative inline-flex h-[4px] w-[4px] rounded-full"
      style={{ backgroundColor: 'var(--color-accent-red)' }}
    />
  </span>
);

type ChangelogItemProps = {
  title: string;
  date: number; // timestamp
  href: string;
  pulsating?: boolean;
};

const ChangelogItem = component$((props: ChangelogItemProps) => {
  const formattedDate = useFormattedDate(props.date);

  return (
    <Link
      href={props.href}
      class="relative group flex gap-2 leading-[1] justify-start items-center text-sm py-1"
    >
      {props.pulsating && (
        <span class="absolute left-0 -translate-x-[14px]">
          <PulsatingMarker />
        </span>
      )}
      <p class="group-hover:underline">{props.title}</p>
      <p class="relative text-ink-secondary text-xs leading-[1] mt-[3px]">
        <span class="relative z-10">{formattedDate.value}</span>
      </p>
      <Icon class="text-ink-tertiary group-hover text-ink" name="arrow-up-right" />
    </Link>
  );
});

const Changelog = ({ class: className, ...props }: PropsOf<'div'>) => (
  <div
    class={['lg:border-l border-separator/50 py-2 rounded-md pl-8 shrink-0', className]}
    {...props}
  >
    <h2 class="mb-2 text-sm font-medium">Changelog</h2>
    <div class="flex flex-col gap-1">
      <ChangelogItem href="#" title="Added 250+ iconset" date={Date.now()} pulsating={true} />
      <ChangelogItem href="#" title="Added 250+ iconset" date={Date.now()} />
      <ChangelogItem href="#" title="Added 250+ iconset" date={Date.now()} />
      <ChangelogItem href="#" title="Added 250+ iconset" date={Date.now()} />
      <ChangelogItem href="#" title="Added 250+ iconset" date={Date.now()} />
    </div>
  </div>
);

const Searchbar = ({ class: className, ...props }: PropsOf<'div'>) => {
  return (
    <div
      class={[
        'group inline-flex gap-3 rounded-full py-2 items-center bg-[white] shadow-3 tracking-tight pl-3 pr-20 cursor-pointer text-sm',
        className,
      ]}
      {...props}
    >
      <Icon name="search" />
      <span class="text-ink-secondary group-hover:text-ink">Search a component</span>
    </div>
  );
};

export const MainContent = () => (
  <div class="flex-1 max-w-screen-xl w-full m-auto">
    <div class="px-6 flex flex-col lg:flex-row sm:my-8 xl:my-12 gap-12 lg:gap-8 w-full justify-between items-center">
      <div class="mt-8 mb-7">
        <h1 class="text-3xl font-semibold">A library for Qwik.js</h1>
        <p class="mt-2 text-ink-secondary">
          Re-export +250 iconset and 250k+ icons, 400 components, <br /> based on tailwindcss,
          easily themable.
        </p>
        <Searchbar class="mt-4" />
      </div>
      <Changelog class="w-full lg:w-fit" />
    </div>
    <div class="flex pt-6 flex-col relative gap-6 h-full">
      <SectionsContent />
    </div>
  </div>
);
