import { toUpper, head, tail, o, compose, join, juxt } from 'ramda'

// capitalizes first character in a string

const capitalize = compose(
	join(''),
	juxt([ 
		o(toUpper, head), 
		tail 
	])
)

export default capitalize