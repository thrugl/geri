import { and, curry, gte, lte } from 'ramda'

// returns true if number c is within range of number a and number b

const between = curry((min: number, max: number, x: number): boolean => and(gte(x, min), lte(x, max)))

export default between