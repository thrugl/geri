import { concat, curry } from 'ramda'

// adds string a to start of string b

const prefix = curry(
	(toAdd: string, inFrontOf: string): string => concat(toAdd, inFrontOf)
)

export default prefix