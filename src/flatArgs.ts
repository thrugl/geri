import { compose, flatten } from 'ramda'
import args from './args'

const flatArgs = compose(flatten, args)

export default flatArgs