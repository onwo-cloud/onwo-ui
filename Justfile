set dotenv-load := true

workspace CMD:
    pnpm run --dir=packages/tailwindcss {{CMD}} || true
    pnpm run --dir=packages/primitives  {{CMD}} || true
    pnpm run --dir=packages/ui          {{CMD}} || true
    pnpm run --dir=packages/icons       {{CMD}} || true
    pnpm run --dir=docs                 {{CMD}} || true

lint:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  just workspace lint

lint-fix:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  just workspace lint.fix

build-tailwind-plugin:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  pnpm run --dir=packages/tailwindcss build

build-primitives:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  pnpm run --dir=packages/primitives build

build-ui:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  pnpm run --dir=packages/ui build

build-icons:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  pnpm run --dir=packages/icons build

build-docs:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  pnpm run --dir=docs build

install:
  pnpm install

# build performed in order
build: install build-tailwind-plugin build-primitives build-icons build-ui build-docs

dev:
  bun run ./watcher.ts

aider-watch:
  aider --watch-files --watch
