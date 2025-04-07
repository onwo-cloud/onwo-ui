import type { DocumentHead } from '@builder.io/qwik-city';
import { Icons } from '@onwo/icons';
import { primitives as P } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

const actions = [
  { label: 'Commit ⌘+K', disabled: false },
  { label: 'Push ⇧+⌘+K', disabled: false },
  { label: 'Update Project ⌘+T', disabled: true },
];

const checkboxItems = ['Show Git Log', 'Show History'];

const radioItems = ['main', 'develop'];

export default () => (
  <div>
    <PageHeadSection
      title="Dropdown"
      breadcrumbs={[{ label: 'Dropdown', to: '/components/dropdown' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<P.Dropdown.Root>
  <P.Dropdown.Trigger class="dropdown-trigger">Git Settings</P.Dropdown.Trigger>
  <P.Dropdown.Popover class="dropdown-popover" gutter={8}>
    <P.Dropdown.Group class="dropdown-group">
      <P.Dropdown.GroupLabel class="dropdown-group-label">Actions</P.Dropdown.GroupLabel>
      {actions.map((action) => (
        <P.Dropdown.Item
          key={action.label}
          class="dropdown-item"
          disabled={action.disabled}
        >
          {action.label}
        </P.Dropdown.Item>
      ))}
    </P.Dropdown.Group>
    <P.Dropdown.Separator />
    {checkboxItems.map((item) => {
      return (
        <P.Dropdown.CheckboxItem key={item} class="dropdown-item">
          <P.Dropdown.ItemIndicator>
            <LuCheck />
          </P.Dropdown.ItemIndicator>
          {item}
        </P.Dropdown.CheckboxItem>
      );
    })}
    <P.Dropdown.Separator />
    <P.Dropdown.RadioGroup class="dropdown-group" value="main">
      {radioItems.map((item) => {
        return (
          <P.Dropdown.RadioItem key={item} class="dropdown-item" value={item}>
            <P.Dropdown.ItemIndicator>
              <LuCheck />
            </P.Dropdown.ItemIndicator>
            {item}
          </P.Dropdown.RadioItem>
        );
      })}
    </P.Dropdown.RadioGroup>
  </P.Dropdown.Popover>
</P.Dropdown.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <P.Dropdown.Root>
          <P.Dropdown.Trigger class="dropdown-trigger">Git Settings</P.Dropdown.Trigger>
          <P.Dropdown.Popover class="dropdown-popover" gutter={8}>
            <P.Dropdown.Group class="dropdown-group">
              <P.Dropdown.GroupLabel class="dropdown-group-label">Actions</P.Dropdown.GroupLabel>
              {actions.map((action) => (
                <P.Dropdown.Item
                  key={action.label}
                  class="dropdown-item"
                  disabled={action.disabled}
                >
                  {action.label}
                </P.Dropdown.Item>
              ))}
            </P.Dropdown.Group>
            <P.Dropdown.Separator />
            {checkboxItems.map((item) => {
              return (
                <P.Dropdown.CheckboxItem key={item} class="dropdown-item">
                  <P.Dropdown.ItemIndicator>
                    <Icons.GenericCheckAlternative />
                  </P.Dropdown.ItemIndicator>
                  {item}
                </P.Dropdown.CheckboxItem>
              );
            })}
            <P.Dropdown.Separator />
            <P.Dropdown.RadioGroup class="dropdown-group" value="main">
              {radioItems.map((item) => {
                return (
                  <P.Dropdown.RadioItem key={item} class="dropdown-item" value={item}>
                    <P.Dropdown.ItemIndicator>
                      <Icons.GenericCheckAlternative />
                    </P.Dropdown.ItemIndicator>
                    {item}
                  </P.Dropdown.RadioItem>
                );
              })}
            </P.Dropdown.RadioGroup>
          </P.Dropdown.Popover>
        </P.Dropdown.Root>
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Dropdown - Onwo UI',
  description:
    'Customizable dropdown components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
