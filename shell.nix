{ pkgs ? import (fetchTarball {
    url = "https://channels.nixos.org/nixos-25.05/nixexprs.tar.xz";
  }) {} }:

pkgs.mkShell {
  nativeBuildInputs = [
    pkgs.just
    pkgs.nodejs_22
    pkgs.bun
    pkgs.nodePackages.concurrently
    pkgs.nodePackages.typescript-language-server
    pkgs.vscode-langservers-extracted
  ];

  shellHook = ''
    export PATH="$PWD/.packages/node_modules/.bin:$PATH"
    if ! command -v yarn > /dev/null; then
      echo "Installing yarn to .packages/bin..."
      mkdir -p .packages
      TMPDIR=$(mktemp -d)
      pushd "$TMPDIR"
      npm init -y >/dev/null 2>&1
      npm install yarn >/dev/null 2>&1
      cp -r node_modules/ "$OLDPWD/.packages/"
      popd
      rm -rf "$TMPDIR"
    fi
  '';
}

