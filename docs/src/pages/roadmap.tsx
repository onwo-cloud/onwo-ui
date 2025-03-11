export const RoadmapPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <div class="pb-12 hidden lg:block">
      <nav aria-label="Breadcrumb">
        <ol class="flex gap-4 flex-wrap items-center">
          <li class="flex text-trunks items-center text-moon-14 last:text-bulma">
            <span class="transition-colors duration-200">
              <a href="/">
                Home
              </a>
            </span>

          </li>
          <li class="flex text-trunks items-center text-moon-14 last:text-bulma">
            <span class="transition-colors duration-200">
              <a href="/roadmap">
                Roadmap
              </a>
            </span>
          </li>
        </ol>
      </nav>
    </div>
    <div>
      <h1 class="text-moon-48 font-semibold">Roadmap</h1>
      <p class="max-w-lg mt-8">This document describe the planned journey of this library, as a new project, I am starting with the essentials and gradually expanding to create a complete toolkit for modern web interfaces. This roadmap will evolve as I progress and incorporate feedback</p>

      <h2 class="text-moon-24 font-semibold mt-10">Current goals</h2>
      <p class="mt-4"><b>Initial Setup</b></p>
      <ul>
        <li>- Make the library available for use on npm registry ✅</li>
        <li>- Implement CI/CD pipeline for automated deployments ✅</li>
      </ul>

      <p class="mt-4"><b>Core</b></p>
      <ul>
        <li>- Import moon.io stylings and fonts ✅</li>
        <li>- Deliver foundational components (buttons, inputs, icons, etc.) 🕒</li>
      </ul>

      <p class="mt-4"><b>Release preparation</b></p>
      <ul>
        <li>- Cleanup this documentation + QA</li>
        <li>- Review design fundamentals</li>
        <li>- Node.js compatibility for v20 & v21</li>
        <li>- Official release 🚀</li>
      </ul>

      <h2 class="text-moon-24 font-semibold mt-10">Long term visions</h2>
      <ul class="mt-4">
        <li>- Keep integrating the more advanced moon.io components</li>
        <li>- Add logics utilities (forms management, hooks, cookie banner, etc.)</li>
        <li>- Improve CI for automatic versionning + related QOL / security features</li>
        <li>- Continual refinement based on community feedback</li>
      </ul>

      <h2 class="text-moon-24 font-semibold mt-10">How to Contribute</h2>
      <p class="mt-4">Whether you're fixing a typo in the docs or adding a complex new component any addition is welcomed! Let me know if you are looking to take a more active part in the project, there's much to do!
      </p>
      <div id="getting started" class="flex items-center justify-between flex-wrap gap-6 w-full">
        <div role="tabpanel" tabIndex={1} class="w-full">
          <section class="flex flex-col lg:flex-row gap-6">
            <div class="flex flex-col w-full gap-6">
              <div class="w-full flex flex-col gap-2 text-moon-16">
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);
