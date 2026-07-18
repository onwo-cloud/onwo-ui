export interface IconifyLicense {
  title: string;
  spdx?: string;
  url?: string;
}

export interface IconifyAuthor {
  name: string;
  url?: string;
}

export interface IconifyInfo {
  name?: string;
  total?: number;
  author?: IconifyAuthor;
  license?: IconifyLicense;
  samples?: string[];
  height?: number;
  category?: string;
  palette?: boolean;
}

export interface IconifyIcon {
  body: string;
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  hFlip?: boolean;
  vFlip?: boolean;
  rotate?: number;
}

export interface IconifyAlias {
  parent: string;
  hFlip?: boolean;
  vFlip?: boolean;
  rotate?: number;
}

export interface IconifyJSON {
  prefix: string;
  info?: IconifyInfo;
  icons: Record<string, IconifyIcon>;
  aliases?: Record<string, IconifyAlias>;
  width?: number;
  height?: number;
}

export interface CliConfig {
  isAll: boolean;
  allowedSets: ReadonlyArray<string>;
}
