declare function plugin(options?: Partial<{}>): {
  handler: () => void
}

declare namespace plugin {
  const __isOptionsFunction: true
}

export = plugin
