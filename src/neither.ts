import { complement, either } from 'ramda'
import { Pred } from 'ramda/tools'

// returns true if neither a nor b return true

const neither = (a: Pred, b: Pred): Pred | boolean => complement(either(a, b))

export default neither