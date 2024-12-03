// recommended
type MyOmit<T, K extends keyof T> = { [k in K]: T[k] }
