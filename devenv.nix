{ pkgs, ... }:
let
  make = import ./nix/make-cli.nix { inherit pkgs; };
  ow-cli = make.mkCli (import ./scripts.nix);
in {
  # Add our custom CLI to the environment packages
  packages = [
    ow-cli
    pkgs.bun
    pkgs.nodejs_22
  ];

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    pnpm.enable = true;
  };

  # Print the help menu when the shell starts
  enterShell = "ow";

  dotenv.enable = true;
}
