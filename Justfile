set dotenv-load := true

default:
    @just --list

workspace CMD:
    pnpm run --dir=packages/tailwindcss {{CMD}} || true
    pnpm run --dir=packages/primitives  {{CMD}} || true
    pnpm run --dir=packages/ui          {{CMD}} || true
    pnpm run --dir=packages/icons       {{CMD}} || true
    pnpm run --dir=docs                 {{CMD}} || true

lint:
  just workspace lint

lint-fix:
  just workspace lint.fix

build-tailwind-plugin:
  pnpm run --dir=packages/tailwindcss build

build-primitives:
  pnpm run --dir=packages/primitives build

build-ui:
  pnpm run --dir=packages/ui build

build-icons:
  pnpm run --dir=packages/icons build

build-docs:
  pnpm run --dir=docs build

install:
  pnpm install

# build performed in order
build: install build-tailwind-plugin build-primitives build-icons build-ui build-docs

dev:
  bun run ./scripts/dev-watcher.ts
