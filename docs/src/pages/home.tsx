export const HomePage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <div class="flex flex-col gap-12 flex-1 relative focus:outline-none">
      <div
        class="uppercase flex px-2 py-0.5 bg-bulma text-goku select-none tracking-[1px] items-center font-semibold rounded-moon-i-xs gap-1 text-moon-9 h-4 self-start"
        data-phx-id="m12-phx-GCuhJbGTummIAhxh"
      >
        Open Source
      </div>
      <h1 class="relative z-10 text-moon-72 font-bold max-w-2xl text-bulma">
        Flexible interfaces for the modern web
      </h1>

      <div class="relative z-10 flex flex-col gap-6 max-w-2xl">
        <p class="text-moon-18 text-bulma">
          Onwo-ui is a UI library built on top of the moon.io design system, adapted for the Qwik.js
          framework. My goal is to provide developers with a robust and efficient toolset for
          crafting exceptional user interfaces.
        </p>
      </div>
      <div class="relative z-10 flex flex-col gap-16 text-bulma">
        <div
          data-phx-id="m13-phx-GCud8J3A5t03ngVB"
          class="flex flex-col 2xl:flex-row items-center gap-8 2xl:gap-18 3xl:gap-36"
        >
          <div class="theme-moon-dark flex flex-col bg-goku rounded-moon-s-lg gap-14 p-2">
            <ul class="text-moon-20 text-right pr-8 text-trunks">
              <li>✓ built on tailwind v4</li>
              <li>✓ no third party libraries</li>
              <li>✓ fully open-source</li>
            </ul>
            <div class="flex flex-col rounded-moon-s-md py-6 px-8 gap-6 bg-gohan">
              <p class="text-moon-24 text-goten">
                This project was built fully on the foundation laid by the people at moon.io! ♥️
                check out{' '}
                <a class="underline" href="https://moon.io">
                  their amazing work
                </a>
              </p>
              <div class="flex items-center gap-2">
                <div class="flex flex-col">
                  <p class="text-moon-18 text-goten">
                    - Emilien, <a href="https://emje.dev">emje.dev</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
