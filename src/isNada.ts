import { anyPass, isEmpty, isNil } from 'ramda'
import isFalse from './isFalse'

// Returns true if argument is empty, null, undefined, NaN or false
// but 0 will return false

const isNada = anyPass([isEmpty, isNil, isFalse, isNaN])

export default isNada