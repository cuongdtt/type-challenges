type PartialByKeys1<T, K extends keyof T = keyof T> = {
  [key in K]?: T[key]
} & {
  [P in keyof T as P extends K ? never : P]: T[P]
}

type PartialByKeys<T, K extends keyof T = keyof T> = Omit<PartialByKeys1<T, K>, never>
