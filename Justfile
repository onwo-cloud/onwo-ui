set dotenv-load := true

build-tailwind-plugin:
  yarn build --cwd=tailwindcss

workspace CMD:
    yarn --cwd=tailwindcss   {{CMD}} || true
    yarn --cwd=ui            {{CMD}} || true
    yarn --cwd=docs          {{CMD}} || true

build-ui:
  yarn build --cwd=ui

build-docs:
  yarn build --cwd=docs

build: build-tailwind-plugin build-ui build-docs

dev:
  concurrently \
    --names '   tw,   ui, tsui,  web,tsweb' \
    --prefix-colors 'blue.bold,green.bold,green.bold,red.bold' \
    "yarn --cwd=tailwindcss   dev"  \
    "yarn --cwd=ui            dev"  \
    "yarn --cwd=ui            ts-watch"  \
    "yarn --cwd=docs          dev" \
    "yarn --cwd=docs          ts-watch"
