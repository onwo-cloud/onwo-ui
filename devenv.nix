{ pkgs, ... }:
let
  make = import ./nix/make-cli.nix { inherit pkgs; };
  dev-cli = make.mkCli (import ./make.nix);
in {
  # Add our custom CLI to the environment packages
  packages = [
    dev-cli
    pkgs.bun
    pkgs.nodejs_22
  ];

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    pnpm.enable = true;
  };

  # Print the help menu when the shell starts
  enterShell = "dev";

  dotenv.enable = true;
}
