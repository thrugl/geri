import { curry, length } from 'ramda'

// returns a shuffled copy of input array

const shuffle = curry(function (a: any[]): any[] {
	const b: any[] = []
	let i = -1

	while (++i < length(a)) {
		const x = Math.floor((i + 1) * Math.random())
		b[i] = b[x]
		b[x] = a[i]
	}
	return b
})

export default shuffle