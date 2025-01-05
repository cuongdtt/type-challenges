type ReplaceKeys<U, T, Y> = {
  [key in keyof U as key]: key extends T
    ? key extends keyof Y
      ? Y[key]
      : never
    : U[key]
}
