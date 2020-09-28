import { replace } from 'ramda'

const removeWhitespace = replace(/\s/g, '')

export default removeWhitespace