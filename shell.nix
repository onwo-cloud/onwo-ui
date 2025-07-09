{ pkgs ? import (fetchTarball {
    url = "https://channels.nixos.org/nixos-25.05/nixexprs.tar.xz";
  }) {} }:

pkgs.mkShell {
  nativeBuildInputs = [
    pkgs.just
    pkgs.nushell
    pkgs.nodejs_22
    pkgs.pnpm
    pkgs.bun
    pkgs.nodePackages.concurrently
    pkgs.aider-chat-full
  ];

  shellHook = ''
    export PATH="$PWD/.packages/node_modules/.bin:$PATH"
  '';
}

