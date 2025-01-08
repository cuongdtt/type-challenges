// solution 1
// type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>

// type ObjectEntries<T> = {
//   [K in keyof T]-?: [K, RemoveUndefined<T[K]>]
// }[keyof T]

// solution 2
type ObjectEntries<T extends object, K extends keyof T = keyof T>
 = K extends K ? [K, T[K] extends undefined ? undefined : Required<T>[K]] : never
