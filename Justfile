set dotenv-load := true

workspace CMD:
    yarn --cwd=tailwindcss         {{CMD}} || true
    yarn --cwd=packages/primitives {{CMD}} || true
    yarn --cwd=packages/ui         {{CMD}} || true
    yarn --cwd=packages/icons      {{CMD}} || true
    yarn --cwd=packages/docs       {{CMD}} || true

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
  yarn --cwd=packages/tailwindcss build

build-primitives:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  yarn --cwd=packages/primitives build

build-ui:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  yarn --cwd=packages/ui build

build-icons:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  yarn --cwd=packages/icons build

build-docs:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  yarn --cwd=docs build

install:
  yarn install

# build performed in order
build: install build-tailwind-plugin build-primitives build-icons build-ui build-docs

dev:
  concurrently \
    --names '    tw,  prim,tsprim,    ui,  tsui,  icon,tsicon,  docs,tsdocs' \
    --prefix-colors 'blue.bold,orange.bold,orange.bold,,yellow.bold,yellow.bold,green.bold,green.bold,red.bold' \
    "yarn --cwd=packages/tailwindcss   dev" \
    "yarn --cwd=packages/primitives    dev" \
    "yarn --cwd=packages/primitives    ts-watch" \
    "yarn --cwd=packages/ui            dev" \
    "yarn --cwd=packages/ui            ts-watch" \
    "yarn --cwd=packages/icons         dev" \
    "yarn --cwd=packages/icons         ts-watch" \
    "yarn --cwd=docs                   dev" \
    "yarn --cwd=docs                   ts-watch"
