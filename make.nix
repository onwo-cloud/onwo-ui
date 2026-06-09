{
  name = "dev";
  desc = "Onwo Development Environment";
  scripts = [
    {
      cmd = "init";
      desc = "Init project (2GB disk)";
      exec = "pnpm install && pnpm --filter ./packages/icons generate-icons";
    }
    {
      cmd = "lint";
      desc = "Run linter on all packages";
      exec = "pnpm -w run lint";
    }
    {
      cmd = "lint.fix";
      desc = "Run linter in autofix mode";
      exec = "pnpm -w run lint:fix";
    }
    {
      cmd = "build";
      desc = "Assemble the empire (Build all)";
      exec = "pnpm install && pnpm -r --filter ./packages/tailwindcss --filter ./packages/primitives --filter ./packages/icons --filter ./packages/ui --filter ./docs build";
    }
    {
      cmd = "dev";
      desc = "Fire up the dev watcher";
      exec = "pnpm --filter ./docs dev";
    }
  ];
}
