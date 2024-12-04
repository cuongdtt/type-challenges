// type First<T extends any[]> =
//     T[0] extends {} ? T[0] : never

// solution
// type First<T extends any[]> = T extends [] ? never : T[0]

type First<T extends any[]> = T extends [infer First, ...any] ? First : never
