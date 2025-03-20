import { Icons } from '@onwo/icons';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';

export const IconsPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection title="Icons" breadcrumbs={[{ label: 'Icons', url: '/icons' }]} />
    <div class="flex gap-2 flex-col">
      <p>
        This icon set includes essential UI elements for navigation, actions, notifications, and
        content organization. They all fall under the MIT license and can be used as is without
        accreditation.
      </p>
      <p>
        The icon packages needs to be installed separately, if you havent already, run the command:
      </p>
      <pre class="theme-onwo-dark w-full bg-gohan overflow-scroll overflow-x-auto p-4 text-onwo-14 text-bulma rounded-onwo-s-sm whitespace-pre-line">
        <code>npm install @onwo/icons</code>
      </pre>
    </div>
    <Anatomy
      variants={{
        Default: `<Icons.ArrowsLeft />`,
      }}
    />
    <Showcase
      title="Different sizes and styling"
      component={
        <div class="flex justify-between w-full items-center">
          <Icons.FilesCopy size="sm" class="text-chichi" />
          <Icons.FilesCopy size="md" class="text-trunks" />
          <Icons.FilesCopy size="lg" class="text-roshi fill-roshi/20" />
          <Icons.FilesCopy size="lg" class="text-piccolo" />
          <Icons.FilesCopy size="xl" class="text-raditz" />
          <Icons.FilesCopy size="xl" class="text-whis" />
        </div>
      }
      code={`<Icons.FilesCopy size="sm" class="text-chichi" />
<Icons.FilesCopy size="md" class="text-trunks" />
<Icons.FilesCopy size="lg" class="text-roshi fill-roshi/20" />
<Icons.FilesCopy size="lg" class="text-piccolo" />
<Icons.FilesCopy size="xl" class="text-raditz" />
<Icons.FilesCopy size="xl" class="text-whis" />`}
    />
  </div>
);
