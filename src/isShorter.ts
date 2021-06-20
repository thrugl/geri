import { length, curry, lt, __ } from 'ramda'

// returns true if array's length is less than n

const isShorter = curry(
	(n: number, a: any[]|string): boolean => lt(__, n)(length(a as []) ?? -1)
)

export default isShorter