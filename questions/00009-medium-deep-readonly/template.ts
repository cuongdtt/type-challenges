// type Primary = string | number | boolean | Function
// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends Primary ? T[P] : DeepReadonly<T[P]>
// }

// solution
// type DeepReadonly<T> = keyof T extends never
//   ? T
//   : { readonly [k in keyof T]: DeepReadonly<T[k]> }

// solution 2
type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}
