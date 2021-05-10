import { curry } from 'ramda'
import isTrue from './isTrue'

const isPropTrue = curry((prop: string, i) => isTrue(i?.[prop]))

export default isPropTrue