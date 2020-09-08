import { isEmpty, isNil, curry } from 'ramda'

// Returns true if argument is empty, null, undefined or false
// but 0 will return true

const isNada = curry(function (x: any): boolean {
	return isEmpty(x) || isNil(x) || x === false
})

export default isNada