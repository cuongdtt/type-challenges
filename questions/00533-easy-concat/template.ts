type Concat<T extends unknown[] | readonly unknown[], U extends unknown[] | readonly unknown[]>
    = [...T, ...U]

// Solution
// type Tuple = readonly unknown[]
// type Concat<T extends Tuple, U extends Tuple> = [...T, ...U]
