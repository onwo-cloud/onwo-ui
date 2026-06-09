import { changelogUpdate, loadPnpmDeps } from 'relacher';

const genChangelog = (folderPath: string) =>
  changelogUpdate(`${folderPath}${folderPath.at(-1) === '/' ? '' : '/'}CHANGELOG.md`, {
    onlyOn: ['major', 'minor', 'patch'],
  });

export const depsBuilder = (root: string) =>
  loadPnpmDeps(root)
    .addDepsOn('@onwo/ui-docs', ['@onwo/primitives', '@onwo/icons', '@onwo/ui'])
    .onPackageBump('@onwo/icons', genChangelog('packages/icons/'))
    .onPackageBump('@onwo/primitives', genChangelog('packages/primitives/'))
    .onPackageBump('@onwo/tailwindcss', genChangelog('packages/tailwindcss/'))
    .onPackageBump('@onwo/ui-docs', genChangelog('docs/'))
    .onPackageBump('@onwo/ui', genChangelog('packages/ui/'));
