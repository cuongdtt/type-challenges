type Push<T extends any[], U> = [...T, U]

// solution
// type Push<T extends unknown[], U> = [...T, U]

// The unknown type represents any value. This is similar to the any type,
// but is safer because it’s not legal to do anything with an unknown value:
