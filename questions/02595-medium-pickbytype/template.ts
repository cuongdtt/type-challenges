type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: U
}

// solution is the same: U vs T[P]
// type PickByType<T, U> = { [P in keyof T as T[P] extends U ? P : never]: T[P] }
