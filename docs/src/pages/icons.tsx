import { CopyIcon } from '@onwo/icons';
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
        Default: `import { ArrowsLeftIcon, FilesCopyIcon } from '@onwo/icons';

<ArrowsLeftIcon />
<FilesCopyIcon size="lg" class="text-success fill-success/20" />`,
      }}
    />

    <Showcase
      title="Different sizes and styling"
      component={
        <div class="flex justify-between w-full items-center">
          <CopyIcon size="sm" class="text-error" />
          <CopyIcon size="md" class="text-lead" />
          <CopyIcon size="lg" class="text-success fill-success/20" />
          <CopyIcon size="lg" class="text-accent" />
          <CopyIcon size="xl" class="text-sand" />
          <CopyIcon size="xl" class="text-neutron" />
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
