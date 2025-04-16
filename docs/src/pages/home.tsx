const BgShape = () => (
  <svg
    class="absolute hidden lg:block top-0 right-0 w-[100vw] h-[100vh] translate-x-[95vh] translate-y-[43vh]"
    width="1053"
    height="1001"
    viewBox="0 0 1053 1001"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.5 0.5H434.5V425.5H0.5V0.5Z" class="text-accent" fill="currentColor" />
    <path
      d="M1052.6 999.5L434.5 425.5H0.5L638.5 999.5H1052.6Z"
      class="text-accent"
      fill="currentColor"
    />
    <path
      d="M434.5 0.5V425.5L1052.5 1000.59V594.5L434.5 0.5Z"
      class="text-accent/80"
      fill="currentColor"
    />
  </svg>
);

export const HomePage = () => (
  <div class="relative h-screen max-h-screen overflow-hidden">
    <BgShape />
    <main class="px-5 lg:pl-20 2xl:pl-32 lg:pt-12 lg:pb-52 flex flex-col grow max-w-screen-xl">
      <div class="flex flex-col gap-12 flex-1 relative focus:outline-none">
        <div
          class="uppercase flex px-2 py-0.5 bg-ink text-paper select-none tracking-[1px] items-center font-semibold rounded-onwo-i-xs gap-1 text-onwo-9 h-4 self-start"
          data-phx-id="m12-phx-GCuhJbGTummIAhxh"
        >
          Open Source
        </div>
        <h1 class="relative z-10 text-onwo-72 font-bold max-w-2xl text-ink">
          Flexible interfaces for the modern web
        </h1>

        <div class="relative z-10 flex flex-col gap-6 max-w-2xl">
          <p class="text-onwo-18 text-ink">
            Onwo-ui is a UI library built on top of the moon.io design system, adapted for the
            Qwik.js framework. My goal is to provide developers with a robust and efficient toolset
            for crafting exceptional user interfaces.
          </p>
        </div>
        <div class="relative z-10 flex flex-col gap-16 text-ink">
          <div
            data-phx-id="m13-phx-GCud8J3A5t03ngVB"
            class="flex flex-col 2xl:flex-row items-center gap-8 2xl:gap-18 3xl:gap-36"
          >
            <div class="theme-onwo-dark flex flex-col bg-paper rounded-onwo-s-lg gap-14 p-2">
              <ul class="text-onwo-20 text-right pr-8 text-lead">
                <li>✓ built on tailwind v4</li>
                <li>✓ no third party libraries</li>
                <li>✓ fully open-source</li>
              </ul>
              <div class="flex flex-col rounded-onwo-s-md py-6 px-8 gap-6 bg-parchment">
                <p class="text-onwo-24 text-forced-a">
                  This project was built fully on the work laid by the people at moon.io! ♥️ check
                  out{' '}
                  <a class="underline" href="https://moon.io">
                    their amazing work
                  </a>
                </p>
                <div class="flex items-center gap-2">
                  <div class="flex flex-col">
                    <p class="text-onwo-18 text-forced-a">
                      - Emilien, <a href="https://emje.dev">emje.dev</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);
