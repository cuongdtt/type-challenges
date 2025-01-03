type BEM<B extends string, E extends string[], M extends string[]> =
    `${B}${E[0] extends string ? `__${E[number]}` : ''}${M[0] extends string ? `--${M[number]}` : ''}`

// solution 2
type BEM2<B extends string, E extends string[], M extends string[]> = `${B}${E extends [] ? '' : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`
