import type { JSXChildren } from "@builder.io/qwik";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: JSXChildren;
  class?: string;
}

export const FeatureCard = ({
  title,
  description,
  icon,
  class: className,
}: FeatureCardProps) => (
  <div
    class={[
      "group w-full bg-canvas-secondary pt-5 pb-6 rounded-2xl relative overflow-hidden isolate",
      "has-[[data-bento-link]:focus-visible]:outline-focus",
      "ring ring-separator-box ring-inset shadow-2",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    <div
      class={[
        "relative pointer-events-none px-5 sm:px-7",
        "flex justify-between flex-col",
      ].join(" ")}
    >
      <div class="flex items-center justify-center size-10 rounded-[0.625rem] mb-8 ring ring-inset ring-separator-secondary">
        {icon}
      </div>

      <div>
        <h3 class="pointer-events-auto type-sm font-medium text-ink-secondary">
          {title}
        </h3>
        <p class="mt-4 pointer-events-auto type-body">
          {description}
        </p>
      </div>

    </div>
  </div>
);

