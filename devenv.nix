{ pkgs, ... }:
let
  # Jist doc at: https://github.com/emilien-jegou/jist
  jistSrc = builtins.fetchTarball {
    url = "https://github.com/emilien-jegou/jist/archive/refs/tags/v0.0.2.tar.gz";
    sha256 = "1j0jpqwv1smrx95pl210rm8ylykfr964b46w2pvdnpdi9s46lvmy";
  };
  jist = import "${jistSrc}/lib/make-cli.nix" { inherit pkgs; };

  dev-cli = jist.cli (import ./make.nix);
in {
  packages = [
    dev-cli
    pkgs.bun
    pkgs.nodejs_22
    pkgs.chromium # <--- System Chromium
  ];

  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    pnpm.enable = true;
  };

  enterShell = "dev";

  env = {
    LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc.lib ];
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = "1";
    PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS = "true";
    PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH = "${pkgs.chromium}/bin/chromium";
  };

  dotenv.enable = true;
}
