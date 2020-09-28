import { anyPass } from 'ramda'

import isNada from './isNada'
import isZero from './isZero'

// returns true if inputed argument is empty, 
// false, zero, NaN, undefined or null

const isZilch = anyPass([isNada, isZero])

export default isZilch