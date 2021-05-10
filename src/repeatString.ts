import { o, curry, repeat, join } from 'ramda'

const repeatString = curry(
	function (str: string, times: number): string {
		return o(join(''), repeat(str))(times)
	}
)

export default repeatString