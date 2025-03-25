import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const GettingStartedPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection
      title="Getting started"
      description="An open-source library of stunning, accessible components in qwik.js."
      breadcrumbs={[{ label: 'Getting Started', url: '/getting-started' }]}
    />

    <div id="getting started" class="flex items-center justify-between flex-wrap gap-6 w-full">
      <div role="tabpanel" tabIndex={1} class="w-full">
        <section class="flex flex-col lg:flex-row gap-6">
          <div class="flex flex-col w-full gap-6">
            <div class="w-full flex flex-col gap-2 text-onwo-16">
              <p>
                <span class="font-medium">Onwo-ui</span> provides open-source qwik.js components to
                use in any of your projects, this section will describe the setup procedure you will
                need to follow to get started.
              </p>
              <p>
                {' '}
                If you wish to see an example setup please check the github example section:
                https://github.com/onwo-cloud/onwo-ui/tree/main/examples{' '}
              </p>
            </div>
          </div>
        </section>

        <section class="flex flex-col lg:flex-row gap-6 mt-10">
          <div class="flex flex-col w-full gap-6">
            <PNav.Link label="Prerequisites" id="prerequisites">
              <h2 id="Prerequisites" class="text-onwo-24 font-medium">
                Prerequisites
              </h2>
            </PNav.Link>
            <div class="w-full flex flex-col gap-2 text-onwo-16">
              <p>To start using onwo-ui, you will need:</p>
              <ul>
                <li>
                  - Node.js <b>^20.3</b>
                </li>
                <li>
                  - A Qwik project: <a href="https://qwik.dev/docs/getting-started/">setup guide</a>
                </li>
                <li>
                  - Tailwindcss <b>v4</b>:{' '}
                  <a href="https://tailwindcss.com/docs/installation/using-vite">setup guide</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="flex flex-col lg:flex-row gap-6 mt-10">
          <div class="flex flex-col w-full gap-6">
            <PNav.Link label="Project-creating" id="project-creating">
              <h2 id="Project-creating" class="text-onwo-24 font-medium">
                Setup with qwik
              </h2>
            </PNav.Link>

            <div class="w-full flex flex-col gap-2 text-onwo-16">
              <p>Add onwo-ui dependencies to your project</p>
              <pre class="theme-onwo-dark w-full bg-gohan overflow-scroll overflow-x-auto p-4 text-onwo-14 text-bulma rounded-onwo-s-sm whitespace-pre-line">
                <code>npm install @onwo/ui @onwo/tailwindcss</code>
              </pre>

              <p>Optionally you can also install onwo-ui icons library</p>
              <pre class="theme-onwo-dark w-full bg-gohan overflow-scroll overflow-x-auto p-4 text-onwo-14 text-bulma rounded-onwo-s-sm whitespace-pre-line">
                <code>npm install @onwo/icons</code>
              </pre>

              <p>
                {' '}
                Choose a theme from{' '}
                <a href="https://github.com/onwo-cloud/onwo-ui/tree/main/tailwindcss/themes">
                  this list
                </a>{' '}
                and add the following to your <code>global.css</code>. Make sure to preserve the
                order!
              </p>
              <div class="theme-onwo-dark w-full bg-gohan overflow-scroll overflow-x-auto p-4 text-onwo-14 text-bulma rounded-onwo-s-sm leading-[17px]">
                <pre class="w-max">
                  <code>
                    <span class="bg-roshi/40">{`@import '@onwo/tailwindcss/themes/moon.css';`}</span>
                    <br />
                    <br />
                    {`@import "tailwindcss";`}
                    <br />
                    <br />
                    <span class="bg-roshi/40">{`@plugin '@onwo/tailwindcss';`}</span>
                    <br />
                    <span class="bg-roshi/40">{`@source '@onwo/ui';`}</span>
                    <br />
                    <br />
                    <span class="bg-roshi/40">{`html,
body {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-size-adjust: none; /* Prevent automatic zooming of fonts on some mobile devices. */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`}</span>
                  </code>
                </pre>
              </div>

              <p class="mt-2">
                Add your theme specific class to the body element or the element where you want the
                theme applied:
              </p>
              <pre class="theme-onwo-dark w-full bg-gohan overflow-scroll overflow-x-auto p-4 text-onwo-14 text-bulma rounded-onwo-s-sm leading-[17px]">
                <code>
                  <span class="bg-roshi/40">{`<body class="theme-onwo-light">...</body>`}</span>
                </code>
              </pre>
              <p class="mt-2">You are good to go!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);
