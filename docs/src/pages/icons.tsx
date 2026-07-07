import { PageHeadSection } from '~/commons/page-head-section';

export const IconsPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection
      title="Icons"
      description="A fitted icon library for all your projects"
      breadcrumbs={[{ label: 'Icons', to: '/icons' }]}
    />
    <div class="onwo-format">
      <p>All icons from lucide.dev</p>
      <p>
        This icon set includes essential UI elements for navigation, actions, notifications, and
        content organization. They all fall under the MIT license and can be used as is without
        accreditation.
      </p>
      <p>
        The icon packages needs to be installed separately, if you havent already, run the command:
      </p>
      <pre class="theme-onwo-dark">
        <code>npm install @onwo/icons</code>
      </pre>
    </div>

  </div>
);
