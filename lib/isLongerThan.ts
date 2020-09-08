import { length, lt, curry } from 'ramda'

// returns true if array's length is greater than n

const isLongerThan = curry(function (n: number, a: any[]): boolean {
	return lt(n)(length(a) ?? 0)
})

export default isLongerThan