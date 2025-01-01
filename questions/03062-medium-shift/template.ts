type Shift<T extends unknown[]> = T extends []
  ? []
  : T extends [any, ...infer R] ? R : never

// another solution: return T in that case T is []
type Shift2<T extends any[]> = T extends [any, ...infer R] ? [...R] : T
