import type { DocumentHead } from '@builder.io/qwik-city';
import { Icons } from '@onwo/icons';
import { primitives as P } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

const users = ['Tim', 'Ryan', 'Jim', 'Jessie', 'Abby'];

export default () => (
  <div>
    <PageHeadSection
      title="Select"
      breadcrumbs={[{ label: 'Select', to: '/components/dropdown' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<P.Select.Root class="select">
  <P.Select.Label>Logged in users</P.Select.Label>
  <P.Select.Trigger class="select-trigger">
    <P.Select.DisplayValue placeholder="P.Select an option" />
  </P.Select.Trigger>
  <P.Select.Popover class="select-popover">
    {users.map((user) => (
      <P.Select.Item class="select-item" key={user}>
        <P.Select.ItemLabel>{user}</P.Select.ItemLabel>
        <P.Select.ItemIndicator>
          <LuCheck />
        </P.Select.ItemIndicator>
      </P.Select.Item>
    ))}
  </P.Select.Popover>
</P.Select.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <P.Select.Root class="select">
          <P.Select.Label>Logged in users</P.Select.Label>
          <P.Select.Trigger class="select-trigger">
            <P.Select.DisplayValue placeholder="Select an option" />
          </P.Select.Trigger>
          <P.Select.Popover class="select-popover">
            {users.map((user) => (
              <P.Select.Item class="select-item" key={user}>
                <P.Select.ItemLabel>{user}</P.Select.ItemLabel>
                <P.Select.ItemIndicator>
                  <Icons.GenericCheckAlternative />
                </P.Select.ItemIndicator>
              </P.Select.Item>
            ))}
          </P.Select.Popover>
        </P.Select.Root>
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'P.Select - Onwo UI',
  description:
    'Customizable dropdown components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
