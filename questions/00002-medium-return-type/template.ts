// my
type MyReturnType<T> = T extends (...arg: any) => infer R ? R : never

// recommended
type _MyReturnType<T extends Function> = T extends (...arg: any) => infer R ? R : never
