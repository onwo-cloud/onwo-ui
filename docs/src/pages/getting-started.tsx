import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const GettingStartedPage = () => (
  <div>
    <PageHeadSection
      title="Getting started"
      description="An open-source library of stunning, accessible components in qwik.js."
      breadcrumbs={[{ label: 'Getting Started', to: '/getting-started' }]}
    />

    <main class="onwo-format w-full">
      <div class="w-full">
        <section>
          <div>
            <div>
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

        <section>
          <div>
            <PNav.Link as="h2" label="Prerequisites" id="prerequisites">
              Prerequisites
            </PNav.Link>
            <div>
              <p>To start using onwo-ui, you will need:</p>
              <ul>
                <li>
                  Node.js <b>^20.3</b>
                </li>
                <li>
                  A Qwik project: <a href="https://qwik.dev/docs/getting-started/">setup guide</a>
                </li>
                <li>
                  Tailwindcss <b>v4</b>:{' '}
                  <a href="https://tailwindcss.com/docs/installation/using-vite">setup guide</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div>
            <PNav.Link as="h2" label="Setup with qwik" id="qwik-setup">
              Setup with qwik
            </PNav.Link>

            <div>
              <p>Add onwo-ui dependencies to your project</p>
              <pre class="theme-onwo-dark w-full bg-parchment overflow-x-auto p-4 text-onwo-14 text-ink rounded-onwo-s-sm whitespace-pre-line">
                <code>npm install @onwo/ui @onwo/tailwindcss</code>
              </pre>

              <p>Optionally you can also install onwo-ui icons library</p>
              <pre class="theme-onwo-dark w-full bg-parchment overflow-x-auto p-4 text-onwo-14 text-ink rounded-onwo-s-sm whitespace-pre-line">
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
              <div class="theme-onwo-dark w-full bg-parchment overflow-x-auto p-4 text-onwo-14 text-ink rounded-onwo-s-sm">
                <pre class="w-max">
                  <code>
                    <span class="bg-success/40">{`@import '@onwo/tailwindcss/themes/moon.css';`}</span>
                    <br />
                    <br />
                    {`@import "tailwindcss";`}
                    <br />
                    <br />
                    <span class="bg-success/40">{`@plugin '@onwo/tailwindcss';`}</span>
                    <br />
                    <span class="bg-success/40">{`@source '@onwo/ui';`}</span>
                    <br />
                    <br />
                    <span class="bg-success/40">{`html,
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

              <p>
                Add your theme specific class to the body element or the element where you want the
                theme applied:
              </p>
              <pre class="theme-onwo-dark w-full bg-parchment overflow-x-auto p-4 text-onwo-14 text-ink rounded-onwo-s-sm">
                <code>
                  <span class="bg-success/40">{`<body class="theme-onwo-light">...</body>`}</span>
                </code>
              </pre>
              <p>You are good to go!</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
);
