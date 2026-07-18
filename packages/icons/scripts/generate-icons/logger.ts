export const colors = {
  red: (s: string) => `\x1b[31m${s}\x1b[0m`,
  green: (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  blue: (s: string) => `\x1b[34m${s}\x1b[0m`,
  bold: (s: string) => `\x1b[1m${s}\x1b[0m`,
  dim: (s: string) => `\x1b[2m${s}\x1b[0m`,
};

export const log = {
  step: (msg: string) => console.info(`\n${colors.blue(colors.bold(msg))}`),
  ok: (msg: string) => console.log(`  ${colors.green('✓')} ${msg}`),
  warn: (msg: string) => console.warn(`  ${colors.yellow('⚠')} ${msg}`),
  error: (msg: string) => console.error(`\n${colors.red(`✗ ${msg}`)}`),
};
