type Pop<T extends any[]> = T extends [...infer R, any] ? R : []

// solution
// type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : never

// solution 2
// type Pop<T extends any[]> = T extends []
//   ? []
//   : T extends [...infer R, infer L]
//   ? R
//   : never;

// type Pop<T extends any[]> = T extends [...infer R, any] ? R : T
