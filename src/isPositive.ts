import { gt, __ } from 'ramda'

const isPositive = gt(__, 0)

export default isPositive