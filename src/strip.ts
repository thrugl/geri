import stripWhitespace  from './stripWhitespace'
import stripPunctuation from './stripPunctuation'

import { compose } from 'ramda'

const strip = compose(stripWhitespace, stripPunctuation)

export default strip