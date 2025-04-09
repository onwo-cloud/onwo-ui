set dotenv-load := true

workspace CMD:
    yarn --cwd=tailwindcss    {{CMD}} || true
    yarn --cwd=packages/ui    {{CMD}} || true
    yarn --cwd=packages/icons {{CMD}} || true
    yarn --cwd=packages/docs  {{CMD}} || true

lint:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  just workspace lint

lint-fix:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  just workspace lint.fix

build-tailwind-plugin:
  yarn build --cwd=packages/tailwindcss

build-ui:
  yarn build --cwd=packages/ui

build-docs:
  yarn build --cwd=packages/docs

install:
  yarn install

# build performed in order
build: install build-tailwind-plugin build-ui build-docs

dev:
  concurrently \
    --names '    tw,    ui,  tsui,  icon,tsicon,  docs,tsdocs' \
    --prefix-colors 'blue.bold,yellow.bold,yellow.bold,green.bold,green.bold,red.bold' \
    "yarn --cwd=packages/tailwindcss   dev" \
    "yarn --cwd=packages/ui            dev" \
    "yarn --cwd=packages/ui            ts-watch" \
    "yarn --cwd=packages/icons         dev" \
    "yarn --cwd=packages/icons         ts-watch" \
    "yarn --cwd=docs                   dev" \
    "yarn --cwd=docs                   ts-watch"
