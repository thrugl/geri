import { complement, isNil } from 'ramda'

const isExistent = complement(isNil)

export default isExistent