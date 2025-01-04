type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U as P]: P extends keyof T ? T[P] : V
}
