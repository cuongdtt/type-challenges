type MyParameters<T extends (...args: any[]) => any> =
    T extends (...args: infer Params) => any ? Params : []

// Solution
// type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer S) => any ? S : any
