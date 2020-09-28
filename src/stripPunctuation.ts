import { replace } from 'ramda'

const removePunctuation = replace(/[.,\/#!$%\^&\*;:{}=\-_`~()–—]/g, '')

export default removePunctuation