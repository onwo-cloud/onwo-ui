{
  name = "dev";
  desc = "Onwo Development Environment";

  scripts = [
    {
      cmd = "init";
      desc = "Init project (2GB disk)";
      deps = [ "init:deps" ];
      dir = "./packages/icons";
      exec = [
        "bun ./scripts/generate-icons.ts --sets=lucide,mdi"
        "pnpm run lint.fix"
      ];
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
      cmd = "build.docs";
      desc = "Build the documentation";
      deps = [ "init:deps" ];
      dir = "./docs";
      exec = "pnpm build";
    }

    {
      cmd = "build";
      desc = "Assemble the empire (Build all)";
      deps = [ "init:deps" ];
      exec = [
        "pnpm -r --filter ./packages/tailwindcss --filter ./packages/primitives --filter ./packages/icons --filter ./packages/ui --filter ./docs build"
      ];
    }
    {
      cmd = "init:deps";
      desc = "Init project deps";
      visible = false;
      exec = "pnpm install";
    }
    {
      cmd = "watch";
      desc = "Fire up the dev watcher";
      dir = "./docs";
      exec = "pnpm dev";
    }
    {
      cmd = "ts.watch";
      desc = "Fire up the dev watcher";
      dir = "./docs";
      exec = "pnpm ts-watch";
    }
    {
      cmd = "release:prepare";
      desc = "Install dependencies in release folder";
      visible = false;
      dir = "./scripts/release";
      exec = "bun install";
    }
    {
      cmd = "relacher";
      desc = "Generate release commit and git tags";
      deps = ["release:prepare"];
      exec = "bun ./scripts/release/relacher.ts";
    }
  ];
}
