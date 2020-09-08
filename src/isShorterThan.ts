import { length, lt, isNil, curry, gt} from 'ramda'

// returns true if array's length is less than n

const isShorterThan = curry(function (n: number, a: any[]): boolean {
	return gt(n)(length(a) ?? 0)
})

export default isShorterThan