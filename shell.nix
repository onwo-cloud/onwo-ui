{ pkgs ? import (fetchTarball {
    url = "https://channels.nixos.org/nixos-24.11/nixexprs.tar.xz";
  }) {} }:
pkgs.mkShell {
  nativeBuildInputs = [
    pkgs.nodejs_20
    pkgs.nodePackages.yarn
    pkgs.nodePackages.typescript-language-server
    pkgs.vscode-langservers-extracted
  ];
}

