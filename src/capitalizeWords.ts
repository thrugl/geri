import { map, split, join, compose } from 'ramda'

import capitalize from './capitalize'

const capitalizeWords = compose(join(' '), map(capitalize), split(' '))

export default capitalizeWords