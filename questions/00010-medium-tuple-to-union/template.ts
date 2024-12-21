type TupleToUnion<T extends unknown[]> = T[number]

// solution 2
// export type TupleToUnion<T> = T extends Array<infer ITEMS> ? ITEMS : never
