// Solution
// Why P = PropertyKey ? generic with distribute type

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K
    ? never
    : K extends P
      ? K
      : never]: T[K]
}

// [key: string]: any: index signature
