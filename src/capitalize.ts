import { toUpper, replace } from 'ramda'

// capitalizes first character in a string

const capitalize = replace(/^./, toUpper)

export default capitalize