import { curry, equals, length } from 'ramda'

const isLength = curry((n: number, a: any[]): boolean => equals(n)(length(a) ?? -1))

export default isLength