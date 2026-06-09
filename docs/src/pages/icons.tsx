import { Icon } from '~/utils/icon'

import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';

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

    <Anatomy
      variants={{
        Default: `import { Icon } from '~/utils/icon'

<Icon i="arrows-left"   />
<Icon i="files-copy"  size="lg" class="text-success fill-success/20"  />`,
      }}
    />

    <Showcase
      title="Different sizes and styling"
      component={
        <div class="flex justify-between w-full items-center">
          <Icon i="copy"  size="sm" class="text-error"  />
          <Icon i="copy"  size="md" class="text-lead"  />
          <Icon i="copy"  size="lg" class="text-success fill-success/20"  />
          <Icon i="copy"  size="lg" class="text-accent"  />
          <Icon i="copy"  size="xl" class="text-sand"  />
          <Icon i="copy"  size="xl" class="text-neutron"  />
        </div>
      }
      code={`<AllIcons.FilesCopyIcon size="sm" class="text-error" />
<AllIcons.FilesCopyIcon size="md" class="text-lead" />
<AllIcons.FilesCopyIcon size="lg" class="text-success fill-success/20" />
<AllIcons.FilesCopyIcon size="lg" class="text-accent" />
<AllIcons.FilesCopyIcon size="xl" class="text-sand" />
<AllIcons.FilesCopyIcon size="xl" class="text-neutron" />`}
    />
  </div>
);
