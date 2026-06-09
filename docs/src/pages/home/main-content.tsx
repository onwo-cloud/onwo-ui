import { component$, useSignal, type PropsOf } from '@builder.io/qwik';
import { Icon } from '~/utils/icon';
import { SectionsContent } from './sections-content';
import { FeatureCard } from './feature-card';

const Searchbar = ({ class: className, ...props }: PropsOf<'div'>) => {
  return (
    <div
      class={[
        'group inline-flex gap-3 rounded-full w-72 py-2 items-center bg-canvas-input hover:bg-canvas-input-hover px-3 cursor-pointer',
        className,
      ]}
      {...props}
    >
      <Icon i="search" class="text-ink" />
      <span class="text-ink-placeholder cursor-text tracking-wide w-full">Search a component</span>
    </div>
  );
};

export const HomeContent = () => (
  <div class="flex-1 max-w-screen-xl w-full m-auto">
    <div class="px-6 flex flex-col lg:flex-row sm:my-10 xl:my-16 gap-12 lg:gap-8 w-full justify-between items-center">
      <div class="flex items-center justify-between mt-8 mb-7 w-full">
        <div>
          <h1 class="type-heading-hero shrink-0">Build apps <br /> that feel instant </h1>
          <Searchbar class="mt-6" />
        </div>

        <p class="max-w-xl text-lg col-span-2">
          Onwo-ui is an handcrafted library for the qwik.js framework, built to give developers an highly cohesive design system without compromising on speed and accessibility.
        </p>
      </div>
    </div>
    <div class="grid gap-4 grid-cols-3">
      <FeatureCard
        title="250+ icon library"
        description="Optimized svgs from iconify, ready to drop into any component without hunting for a CDN link."
        icon={<Icon size="xl" i="library" />}
      />

      <FeatureCard
        title="400+ Components"
        description="Themed components developed from scratch and their primitives, all MIT."
        icon={<Icon size="xl" i="component" />}
      />

      <FeatureCard
        title="Tailwind"
        description="Swap a handful of CSS variables to re-skin the entire library, light or dark, brand or grayscale."
        icon={<Icon size="xl" i="mdi:tailwind" />}
      />
    </div>

    <div class="flex mt-42 flex-col relative gap-6 h-full">
      <div class="px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
        <div class="max-w-xl">
          <h2 class="type-heading-section mb-3"> Showcase </h2>
          <p class="text-ink-secondary text-base leading-relaxed">
            Discover our registry of production-ready components and interactive primitives crafted to accelerate your layout workflow.
          </p>
        </div>
        <div class="self-start md:self-auto shrink-0">
          <Radio2 />
        </div>
      </div>
      <SectionsContent />
    </div>
    <FaqSection />
  </div>
);

const FAQ_ITEMS = [
  {
    question: "Who is this library for?",
    answer: "We set out to build a library that demarcates itself by offering exceptionally low bundle sizes and virtually no third-party dependencies, all without sacrificing a polished, highly modern look. On the flip side, because we are operating in a younger ecosystem and building a fast-moving project, you might encounter shifting patterns as we refine and expand the component APIs."
  },
  {
    question: "Why Qwik.js over Next.js?",
    answer: "Qwik.js is built with laziness as a first-class citizen — every hook, event handler, and state-modifying function is downloaded only when it's actually needed, never upfront. Unlike hydration-first frameworks, Qwik ships near-zero JavaScript even after the user start interacting with the page, it also uses fine-grained reactivity to update only what changed, never re-rendering entire component trees. The result is instant interactivity regardless of app complexity."
  },
  {
    question: "Can I use SSR and CSR with Onwo-ui?",
    answer: "Qwik is built from the ground up to merge server-side rendering and client-side interactivity seamlessly, with full support for static build."
  },
];

export const FaqSection = component$(() => {
  const activeFaqIndex = useSignal<number | null>(null);

  return (
    <section class="border-t border-b border-separator-box py-20 lg:py-28">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-24 items-start">
          <div class="flex flex-col gap-4 lg:sticky lg:top-24">
            <span class="text-sm tracking-widest uppercase text-ink-secondary">FAQ</span>
            <h2 class="text-3xl lg:text-3xl font-medium tracking-tight text-ink text-balance">
              Often asked questions
            </h2>
          </div>

          <div class="border-t border-separator-box">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = activeFaqIndex.value === index;
              return (
                <div key={index} class="border-b border-separator-box">
                  <button
                    type="button"
                    class="w-full text-left py-5 flex justify-between items-baseline gap-6 text-xl font-medium text-ink hover:text-ink-secondary transition-colors"
                    onClick$={() => {
                      activeFaqIndex.value = isOpen ? null : index;
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span class="shrink-0 text-xl font-normal text-ink-placeholder select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div class="pb-6">
                      <p class="text-[15px] leading-relaxed text-ink-secondary max-w-2xl">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

export const Radio1 = () => (
  <div class="h-fit p-1 flex items-center justify-center bg-canvas-secondary rounded-lg ring ring-inset ring-separator-box">
    <button class="bg-canvas px-5 py-1 rounded-md font-medium ring ring-separator-secondary ring-inset">Component</button>
    <button class="px-5 py-1 rounded-lg text-ink-secondary">Primitives</button>
  </div>
);

export const Radio2 = () => (
  <div class="h-fit flex items-center justify-center rounded-full ring ring-inset ring-separator-box">
    <button class="px-5 py-2 rounded-full cursor-pointer font-medium shadow-4 ring ring-separator-secondary ring-inset">Component</button>
    <button class="px-5 py-1 rounded-full cursor-pointer text-ink-tertiary">Primitives</button>
  </div>
);
