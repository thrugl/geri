import { concat, curry } from 'ramda'

// adds string a to the end of string b

const suffix = curry((toAdd: string, afterThis: string): string => concat(afterThis, toAdd))

export default suffix