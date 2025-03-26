import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const RoadmapPage = () => (
  <div>
    <PageHeadSection
      title="Roadmap"
      description="Upcoming change to the onwo ui library."
      breadcrumbs={[{ label: 'Roadmap', url: '/roadmap' }]}
    />
    <div class="onwo-format">
      <p class="max-w-5xl">
        This document describe the planned journey of this library, as a new project, I am starting
        with the essentials and gradually expanding to create a complete toolkit for modern web
        interfaces. This roadmap will evolve as I progress and incorporate feedback
      </p>

      <PNav.Link elem="h2" id="current-goals" label="Current goals">
        Current goals
      </PNav.Link>
      <p>
        <b>Initial Setup</b>
      </p>
      <ul>
        <li>Make the library available for use on npm registry ✅</li>
        <li>Implement CI/CD pipeline for automated deployments ✅</li>
      </ul>

      <p>
        <b>Core</b>
      </p>
      <ul>
        <li>Import moon.io stylings and fonts ✅</li>
        <li>Deliver foundational components (buttons, inputs, icons, etc.) 🕒</li>
      </ul>

      <p>
        <b>Release preparation</b>
      </p>
      <ul>
        <li>Cleanup this documentation + QA</li>
        <li>Node.js compatibility for v20 & v21</li>
        <li>Official release 🚀</li>
      </ul>

      <PNav.Link elem="h2" id="long-term" label="Long term">
        Long term visions
      </PNav.Link>
      <ul>
        <li>Keep integrating the more advanced moon.io components</li>
        <li>Add logics utilities (forms management, hooks, cookie banner, etc.)</li>
        <li>Improve CI for automatic versionning + related QOL / security features</li>
        <li>Provide ready to use templates & themes</li>
        <li>Continual refinement based on community feedback</li>
      </ul>
      <PNav.Link elem="h2" id="contribute" label="Contribute">
        How to Contribute
      </PNav.Link>
      <p>
        Whether you're fixing a typo in the docs or adding a complex new component any addition is
        welcomed! Let me know if you are looking to take a more active part in the project, there's
        much to do!
      </p>
      <div id="getting started" class="flex items-center justify-between flex-wrap gap-6 w-full">
        <div role="tabpanel" tabIndex={1} class="w-full">
          <section class="flex flex-col lg:flex-row gap-6">
            <div class="flex flex-col w-full gap-6">
              <div class="w-full flex flex-col gap-2 text-onwo-16"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);
