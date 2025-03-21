set dotenv-load := true

build-tailwind-plugin:
  yarn build --cwd=tailwindcss

workspace CMD:
    yarn --cwd=tailwindcss   {{CMD}} || true
    yarn --cwd=ui            {{CMD}} || true
    yarn --cwd=docs          {{CMD}} || true

lint:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  just workspace lint

lint-fix:
  #!/usr/bin/env bash
  export ESLINT_MODE=full
  just workspace lint.fix

build-ui:
  yarn build --cwd=ui

build-docs:
  yarn build --cwd=docs

build: build-tailwind-plugin build-ui build-docs

dev:
  concurrently \
    --names '    tw,    ui,  tsui,  icon,tsicon,  docs,tsdocs' \
    --prefix-colors 'blue.bold,yellow.bold,yellow.bold,green.bold,green.bold,red.bold' \
    "yarn --cwd=tailwindcss   dev" \
    "yarn --cwd=ui            dev" \
    "yarn --cwd=ui            ts-watch" \
    "yarn --cwd=icons         dev" \
    "yarn --cwd=icons         ts-watch" \
    "yarn --cwd=docs          dev" \
    "yarn --cwd=docs          ts-watch"
