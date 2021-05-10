import strip from './strip'
import args  from './args'

import { apply, equals, o, compose, toUpper, map, binary, curry } from 'ramda'

const sameText = curry( 
	binary(
		compose(
			apply(equals),
			map(o(toUpper, strip)),
			args
		)
	)
)

export default sameText