function bundle(bundleName: string, symbols: string[]) {
  return symbols.reduce((obj, key) => {
    // Sometimes symbols are prefixed with `s_`, remove it.
    obj[key.replace('s_', '')] = obj[key] = bundleName;
    return obj;
  }, {} as Record<string, string>);
}

// experimental bundle optimization
export default {
  ...bundle('animate', [
    's_8nl8Xk9DyS4',
    's_4IvpYgZI8vo',
    's_o2CuirAU4Ak',
    's_tlUo45to5BA',
  ]),
}

