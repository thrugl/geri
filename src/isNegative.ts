import { lt, __ } from 'ramda'

const isNegative = lt(__, 0)

export default isNegative