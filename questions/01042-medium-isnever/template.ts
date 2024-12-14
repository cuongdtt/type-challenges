// type IsNever<T> = T extends {} ? false : T extends undefined | null ? false : true

// Solution
type IsNever<T> = [T] extends [never] ? true : false
