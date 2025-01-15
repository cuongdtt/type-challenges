type IsEqual<T, U> =
	(<G>() => G extends T ? 1 : 2) extends
	(<G>() => G extends U ? 1 : 2)
	  ? true
	  : false

type Includes<T extends readonly any[], U> =
    T extends [infer F, ...infer Rest] ? IsEqual<F, U> extends true ? true : Includes<Rest, U> : false

// solution
// type Includes<T extends readonly any[], U> = {
//   [P in T[number]]: true
// }[U] extends true ? true : false

// recursion
// type Includes<T extends readonly any[], U> =
//   T['length'] extends 0 ? false : // recursion terminal case
//     T extends [infer First, ...infer Rest] ? // recursion decomposition
//       Equal<First, U> extends true ? // recursive test
//         true : Includes<Rest, U> : never // actual recursion
