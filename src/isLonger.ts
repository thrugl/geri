import { length, gt, curry, __ } from 'ramda'

// returns true if array's length is greater than n

const isLonger = curry((n: number, a: any[]|string): boolean => gt(__, n)(length(a as []) ?? -1))

export default isLonger