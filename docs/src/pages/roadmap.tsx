import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const RoadmapPage = () => (
  <div>
    <PageHeadSection
      title="Roadmap"
      description="Upcoming change to the onwo ui library."
      breadcrumbs={[{ label: 'Roadmap', to: '/roadmap' }]}
    />
    <div class="onwo-format">
      <p class="max-w-5xl">
        This document describe the planned journey of this library, as a new project, I am starting
        with the essentials and gradually expanding to create a complete toolkit for modern web
        interfaces. This roadmap will evolve as I progress and incorporate feedback
      </p>

      <PNav.Link as="h2" id="why" label="Why this library">
        Why this library
      </PNav.Link>
      <p>
        I have been using Qwik for a while and I used or explored a few libraries while using it,
        the most proeminent one being <a href="https://qwikui.com/">qwikui</a>. In my projects I
        amassed a large amount of components or utility, but it was always quite messy to
        orchestrate them and moving them around, there was no unified way to share them accross
        projects, and rather than create a close sourced library for my own pleasure I decided to
        open up this project.
      </p>

      <p>
        Currently my sole goal is to release it with a few dozen styled and accessible components
        following the styles from moon.io but also leveraging the works from qwikui, shadcn and by
        extension radix-ui.
      </p>
      <PNav.Link as="h2" id="current-goals" label="Current goals">
        Current goals
      </PNav.Link>
      <h4>Initial Setup </h4>
      <ul>
        <li>Make the library available for use on npm registry ✅</li>
        <li>Implement CI/CD pipeline for automated deployments ✅</li>
      </ul>

      <h4>Core</h4>
      <ul>
        <li>Import moon.io stylings and fonts ✅</li>
        <li>Deliver foundational components (buttons, inputs, icons, etc.) 🕒</li>
      </ul>

      <h4>Release preparation</h4>
      <ul>
        <li>Cleanup this documentation + QA</li>
        <li>Node.js compatibility for v20 & v21</li>
        <li>Official release 🚀</li>
      </ul>

      <PNav.Link as="h2" id="long-term" label="Long term">
        Long term visions
      </PNav.Link>
      <ul>
        <li>
          Keep integrating components from diverse ui libraries, shadcn being the prime inspiration
        </li>
        <li>Add logics utilities (forms management, hooks, cookie banner, etc.)</li>
        <li>Improve CI for automatic versionning + related QOL / security features</li>
        <li>
          Ready to use templates & themes, inspired by{' '}
          <a href="https://www.shadcnblocks.com/">shadcnblocks</a>
        </li>
      </ul>
      <PNav.Link as="h2" id="contribute" label="Contribute">
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
