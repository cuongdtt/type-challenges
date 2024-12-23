type Last<T extends any[]> = T extends [...Array<any>, infer P] ? P : never

// clever solution
// type Last<T extends any[]> = [any, ...T][T["length"]];
// add 1 more any item and get the last by length
